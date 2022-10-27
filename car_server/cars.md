# Car storage API

## **getAllModels()**

Returns names of all models in storage as an array of strings.

The name is added to the array only once.

If nothing found, returns an empty array.

## **getCar(key, value)**

Get all cars that match the given key-value pair.

- Returns car objects in an array.
- If there is no match, an empty array is returned.

### Examples

```js
getCar("model", "Fast GT");
getCar("licence", "ABC-1");
```

## **getAllCars()**

Returns all car objects in an array (or an empty array).
