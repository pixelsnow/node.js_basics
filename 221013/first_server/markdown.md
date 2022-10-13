# Markdown intro

## vscode/vscodium

- mac
  - cmd + shift + v
- windows
  - ctrl + shift + v

## headers

# Level1

## Level2

### Level3

#### Level4

##### Level5

###### Level6

## Text formatting

Some _italic_ text. This is **bold**.

If you have some `code` or `commands`, use backticks.  
Two spaces in the end of line results in linefeed

## Lists

### list

- item1
  - subitem
- item2
  - subitem2
  - subitem3

### numbered list

1. item1
2. item2

## Terminal or shell

```shell
> node -v
```

### gray background

```
This is some text
```

## Code snippets

### JavaScript

```js
const number = 12;
if (number > 10) console.log("greater than 10");
```

### HTML

```html
<html>
  <head></head>
  <body>
    <h1>Heading</h1>
  </body>
</html>
```

### CSS

```css
h1 {
  color: blue;
}
```

### JSON

```json
{
  "firstname": "Leila",
  "lastname": "Hökki"
}
```

## To have a page break in exported pdf:

```html
<div style="page-break-after:always;"></div>
```

## Links

https://www.markdownguide.org/

https://en.wikipedia.org/wiki/Markdown

![alt text](svg_ver.svg "me")
