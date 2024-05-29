---
aliases:
publish: true
date: 2023-10-20
---
# Git

## .gitignore
## .gitattributes

Mit diesen Attributes kann man git den Umgang mit verschiedenen Dateitypen und Betriebssystemen beibringen:
-[LF / CRLF](https://github.com/ascode-com/wiki/tree/main/line-endings) ( also [video](https://www.youtube.com/watch?v=zn7m2Mdm_Vg))
- text vs binary
- diff-tools usw.

Ich habe es in den new-objects/template-* Repos implementiert, das führt zu weniger Problemen beim Nutzen von unterschiedlichen Betriebssystemen. 


[[Github]]

## Use conditional config with "includeIf"

I often use different `user.name` and `user.email` configurations, depending on the git host and project, which historically was solved by creating more specific local configurations per repo. (`/path/to/repo/.git/config`) But as of git >= `2.13` you can also create a conditionals:
- `gitdir` depending on the path of the checkout
- `hasconfig` depending on git properties
- `onbranch`: depending on which branch you're operating

Here is a small example for how to use it for working with specific remote urls (meaning github/<orga>/project or gitlab/<orga>...)

.gitconfig
```
# This matches the remote configuration of git remote -v
## all github projects with a https remote, targeting the user mi-skam
[includeIf "hasconfig:remote.*.url:https://github.com/mi-skam/**"]
path = .gitconfig-github-mi-skam
# git
## all github projects with a ssh remote, targeting the user mi-skam
[includeIf "hasconfig:remote.*.url:git@github.com:mi-skam/**"]
path = .gitconfig-github-mi-skam
```




## squash n commits

Simple version:
```shell
git reset --soft HEAD~N &&
git commit
```

## adding a git tag

```shell
git tag -a v1.0.0 -m "Release version 1.0.0" # create a tag
git tag -d v1.0.0 # delete a tag locally
git push origin :refs/tags/v1.0.0 # dalete them on the remote
git push origin --tags # publish all tags to remote
git tag # show all tags
```

## rename branches
```shell
# rename local branch
git branch -M <branch>
# push to a another remote branch
git push -u origin <branch>
# delete a remote branch
git push origin --delete <branch>
```

## updating a commits author name and email
```shell
git commit --amend --reset-author
```