# Employee data storage

## employee.json

```json
[
  {
    "id": 1,
    "firstname": "Leila",
    "lastname": "Hökki",
    "department": "ICT",
    "salary": 4000
  }
  {
    "id": 2,
    "firstname": "Matt",
    "lastname": "River",
    "department": "ICT",
    "salary": 4000
  }
  {
    "id": 3,
    "firstname": "Jesse",
    "lastname": "River",
    "department": "Marketing",
    "salary": 5000
  }
]
```

### public API (methods of Datastorage class)

#### dataStorageLayer.js

- getAll()
  - returns an array of all employees / []
- getOne(id)
  - returns an employee object / NOT_FOUND
- insert(newEmployee)
  - returns INSERT_OK / NOT_INSERTED / ALREADY_IN_USE
- update(updatedEmployee)
  - returns UPDATE_OK / NOT_UPDATED
- remove(id)
  - returns REMOVE_OK / NOT_FOUND / NOT_REMOVED
- getters for status codes
  - returns an array of status codes
