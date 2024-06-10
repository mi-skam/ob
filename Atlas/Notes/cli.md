---
aliases: 
publish: true
created: 2023-10-17
---
# cli

## Idea

Create a project scaffolding program that:
1. prompts for project types
2.  clones the *template repos* to *name*  
3. adjusts *name property* in *package.json*
4. inits a git repo

## Figlet (package)

```shell
# show all fonts
npm i -g figlet-cli
figlet -l|xargs -I FONT sh -c 'echo "FONT:" && figlet -f "FONT" "Imhotep" && echo "-------------------------"'
```