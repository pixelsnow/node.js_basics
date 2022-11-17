"use strict";

(function () {
  let iceCreamList;
  let resultArea;

  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    iceCreamList = document.getElementById("ice-cream-list");
    resultArea = document.getElementById("result-area");
    console.log(iceCreamList, resultArea);

    try {
      const data = await fetch("/all");
      const flavours = await data.json();
      populateIceCreamList(flavours);
    } catch (err) {
      showErrorMessage(err.message);
    }
  }

  function populateIceCreamList(queryResult) {
    for (const flavour of queryResult) {
      const option = document.createElement("option");
      option.value = flavour;
      option.textContent = flavour;
      iceCreamList.appendChild(option);
    }
    iceCreamList.addEventListener("change", choose);
    iceCreamList.value = "";
  }

  async function choose() {
    const iceCreamFlavour = iceCreamList.value;
    if (iceCreamFlavour.length > 0) {
      try {
        const data = await fetch(`/icecreams/${iceCreamFlavour}`);
        const result = await data.json();
        updateResult(result);
      } catch (err) {
        showErrorMessage(err.message);
      }
    } else {
      clearResultArea();
    }
  }

  function updateResult(data) {
    if (!data) {
      showErrorMessage("No data error");
    } else if (data.message) {
      showErrorMessage(data.message);
    } else if (data.name && data.name.length === 0) {
      clearResultArea();
    } else {
      let htmlString = `
            <div>
                <p id="name">${data.name}</p>
                <p id="price">€${data.price}</p>
            </div>`;
      if (data.image && data.image.length > 0) {
        htmlString += `<img src="/images/${data.image}"/>`;
      }
      resultArea.innerHTML = htmlString;
    }
  }

  function clearResultArea() {
    resultArea.innerHTML = "";
  }

  function showErrorMessage(message) {
    resultArea.innerHTML = `
        <div class="error">
            <h2>Error</h2>
            <p>${message}</p>
        </div>`;
  }
})();
