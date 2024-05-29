
#code/editor 

We use 'vim' as the term for all vim based editors, be it the classic vim editor or the fork neovim. 

vim is a modal text editor which is extensible by using `viml`  or `lua` (neovim) to write configuration or even plugins.

## Plugins

### Plugin Manager
There are many pl

## TMUX integration

## Clipboard WSL <-> Windows

1. `win32yank.exe` in einen von der `WSL2` gestarteten VM ausführbaren Bereich kopieren (z.B. $HOME/userName/bin)
2. testen, ob win32yank.exe geht (`echo "hello clipboard" | win32yank.exe -i`)
3. vim Konfiguration
4. vim neustarten, mit `yy` in das Clipboard schreiben, mit `p` aus dem Clipboard auslesen

### Tutorial
```shell
curl -sLo/tmp/win32yank.zip https://github.com/equalsraf/win32yank/releases/download/v1.1.1/win32yank-x64.zip
unzip -p /tmp/win32yank.zip win32yank.exe > $HOME/user/bin/win32yank.exe
chmod +x $HOME/user/bin/win32yank.exe

```

```vim
set clipboard+=unnamedplus
let g:clipboard = {
  \   'name': 'win32yank-wsl',
  \   'copy': {
  \      '+': 'win32yank -i --crlf',
  \      '*': 'win32yank -i --crlf',
  \    },
  \   'paste': {
  \      '+': 'win32yank -o --lf',
  \      '*': 'win32yank -o --lf',
  \   },
  \   'cache_enabled': 1,
  \ }
```

