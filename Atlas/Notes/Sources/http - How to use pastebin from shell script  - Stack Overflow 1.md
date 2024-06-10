---
Source: https://stackoverflow.com/questions/4013947/how-to-use-pastebin-from-shell-script
---

As pastebin.com closed their public api, I was looking for alternatives.

[Sprunge](http://github.com/rupa/sprunge) is great. Usage:

```bash
<command> | curl -F 'sprunge=<-' http://sprunge.us
```

or, as I use it:

```bash
alias paste="curl -F 'sprunge=<-' http://sprunge.us"
<command> | paste
```
