// CLIENT SIDE JS

"use strict";

(function () {
  let resultSet;
  let resultSection;
  let keyInput;
  let searchValueInput;
  let messageSection;

  // Could also use classList for this. probably even better
  const showResultSection = () =>
    resultSection.removeAttribute("class", "hidden");
  const hideResultSection = () => resultSection.setAttribute("class", "hidden");
  const showMessage = () => messageSection.removeAttribute("class", "hidden");
  const hideMessage = () => messageSection.setAttribute("class", "hidden");

  // After DOM is loaded, initialise the page
  document.addEventListener("DOMContentLoaded", init);

  function init() {
    resultSet = document.getElementById("result-set");
    resultSection = document.getElementById("result-section");
    keyInput = document.getElementById("key");
    searchValueInput = document.getElementById("search-value");
    messageSection = document.getElementById("message-section");

    document.getElementById("submit-btn").addEventListener("click", submit);
  }

  async function submit() {
    const key = keyInput.value;
    const searchValue = searchValueInput.value;
    try {
      const uri = key ? `/persons/${key}?value=${searchValue}` : "/persons";
      const result = await fetch(uri);
      const personData = await result.json();
      updatePage(personData);
    } catch (err) {
      showError(err.message);
    }
  }

  function showError(message) {
    messageSection.innerHTML = `<p>${message}</p>`;
    hideResultSection();
    showMessage();
  }

  function updatePage(searchResult) {
    if (searchResult.message) {
      showError(searchResult.message);
    } else if (searchResult.length === 0) {
      showError("No person found");
    } else {
      let htmlString = "";
      for (const person of searchResult) {
        htmlString += `<tr>
                <td>${person.firstname}</td>
                <td>${person.lastname}</td>
                <td>${person.age}</td>
            </tr>
            `;
      }
      resultSet.innerHTML = htmlString;
      hideMessage();
      showResultSection();
    }
  }
})();
