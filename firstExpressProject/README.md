# Express app

https://expressjs.com/
https://expressjs.com/en/4x/api.html
https://ejs.co/

## Create folder for the application

## Create package.json for the app

```shell
npm init -y
```

or

```shell
npm init
```

and answer questions

You can edit the package.json later with editor

The package.json can also be created manually. At least name and version are needed

```json
{
  "name": "firstexpressproject",
  "version": "1.0.0"
}
```

## install libraries

```shell
npm install express
```

Installed libraries will be in node_modules folder. Adds dependencies object object to package.json

```shell
npm install
```

Installs all dependencies that are listed in package.json

## Check licences

```shell
npx license-checker --summary
```

## Check vulnerabilities

```shell
npm audit
```
