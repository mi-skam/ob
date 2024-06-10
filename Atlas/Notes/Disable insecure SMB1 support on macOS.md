---
aliases: 
publish: true
created: 2023-10-02
---
To disable the usage of SMB1 on macOS, you need to setup the following configuaration.

```shell
cat ~/Library/Preferences/nsmb.conf
# Configuration file for foo.bar
  [default]
  smb_neg=smb2_only
```
