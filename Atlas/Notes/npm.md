---
aliases: 
publish: true
created: 2023-10-11
---
# npm

## Basics

```shell
// init
npm init -y
npm install
```

### Configuration
```shell
# sets prefix for npm install -g <package_name>
npm set prefix $HOME/.local
# make sure to add $HOME/.local/bin to $PATH
```

## Packages

Creating a npm package.

Package name refers to  the `name` property of `package.json`


```bash
npm publish --access public
```

## Workspaces

## Commands

**Create a workspace**
```bash
# -w equals --workspace
npm init -w packages/<package-a>
```

**Run a script**
```bash
# -w <package-name> run script in <workspace>
npm run <script> -w <package-name>
# -ws run a script in _each_ packages
npm run <script> -ws
# --is-present prevents an error if a script is not defined in one of the matching packages
npm run <script> -ws --is-present
```

**Install Packages**
```bash
npm i http-server -w <package-name>
npm i ntl -ws
```