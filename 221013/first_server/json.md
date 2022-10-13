# JSON (JavaScript Object Notation)

## Documentation

https://www.json.org/

## File extension

.json

## Values

- string
- number
- array
- object
- true
- false
- null

### Examples

### String

Must be doublequoted.
empty string:
""

```json
"this is a string"
"Here is a \"quote\" in the 'middle'"
"heart symbol is \u2665"
```

### Number

- no leading +
- only one leading 0
- decimal delimiter is .

These are allowed:

```json
0, 0.5, 345.567, 1200, 1.5E10, 2E-2, 2E+2, -1, -11.5, -0.567
```

These are not allowed:

```json
000.34, +20, 00030
```

### Array

Array begins with [ and ends with ]. Values in array are separated by a comma.

#### Examples

```json
[1, 2, 3, 4, 5]

["text1", "text2"]

[true, null, false]

[
    {"name":"Leila"}
    {"name":"Matt"}
]

[
    [1, 2, 3],
    [4, 5, 6]
]
```

### Object

An object begins with { and ends with }. An object consists of comma separated key-value pairs. The key and value are separated by colon :

#### Examples

```json
{
    "firstname":"Matt",
    "lastname":"River"
}

{
    "firstname":"Leila",
    "children":[
        {"firstname":"Vera", "age":5},
        {
            "firstname":"Jesse",
            "age":7,
            "toys":["lego", "trains"];
        }
    ]
}

{
    "key1":"value1",
    "key2":"value2",
    "key3":[1, 2, 3],
    "key4":{
        "a":number,
        "b":"text",
        "c":[7, 8, 9],
        "d":{
            "x":true,
            "y":false,
            "z":null,
            "w":2
        }
    }
}
```
