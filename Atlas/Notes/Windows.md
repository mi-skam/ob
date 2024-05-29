## Fix boot loader 

[ ] Diskpart
[ ] List disk
[ ] Select disk n
[ ] List partition
[ ] Select partition j

Jetzt entweder **mbr** oder **UEFI** weiterverfolgen.
### mbr
[ ] active
[ ] Exit
[ ] bcdboot c:\windows

### UEFI

[ ] Assign letter=s
[ ] Exit
[ ] Format s: /FS:fat32
[ ] Check for windows drive
[ ] bcdboot n:\windows /s S: /f UEFI

## Aliases in Windows command prompt

[Source](https://stackoverflow.com/questions/20530996/aliases-in-windows-command-prompt)

> [!INFO] Title
> 1. Create a .bat or .cmd file with your `DOSKEY` commands.
> 2. Run regedit and go to `HKEY_LOCAL_MACHINE\Software\Microsoft\Command Processor`
> 3. Add String Value entry with the name `AutoRun` and the _full_ path of your .bat/.cmd file.
> For example, `%USERPROFILE%\bin\alias.cmd`, replacing the initial segment of the path with `%USERPROFILE%` is useful for syncing among multiple machines.

or simply execute this registry configuration file
![[cmd.reg]]

aliases.cmd
```dos
@echo off

:: Temporary system path at cmd startup

:: set PATH=%PATH%;"C:\Program Files\Sublime Text 2\"

:: Add to path by command

:: DOSKEY add_python26=set PATH=%PATH%;"C:\Python26\"
:: DOSKEY add_python33=set PATH=%PATH%;"C:\Python33\"

:: Commands

DOSKEY ls=dir /B $*
:: DOSKEY sublime=sublime_text $*  
    ::sublime_text.exe is name of the executable. By adding a temporary entry to system path, we don't have to write the whole directory anymore.
:: DOSKEY gsp="C:\Program Files (x86)\Sketchpad5\GSP505en.exe"
DOSKEY alias=notepad %USERPROFILE%\bin\alias.cmd
DOSKEY dive=docker run -ti --rm  -v /var/run/docker.sock:/var/run/docker.sock wagoodman/dive

:: Common directories

DOSKEY dropbox=cd "%USERPROFILE%\Dropbox\$*"
DOSKEY research=cd %USERPROFILE%\Dropbox\Research\
```

## Prompt in Windows command prompt

[Source](https://stackoverflow.com/questions/12028372/how-do-i-change-the-command-line-prompt-in-windows)

```dos
:: Prompt
DIRCMD=/OGNE
PROMPT [$p]$_$g
```

## Change Windows Resolution on Commandline

There is a nice cli[^1] to control the resolution
```cmd
;;SetDpi <scale> <monitorIndex>
SetDpi 150 1
SetDpi 150 2
```

Here is a nice ahk[^2] script that automatically change the scaling of the external display depending on the *connection* state.

```autohotkey
#Requires AutoHotkey v2.0
; requires setDpi.exe in $PATH https://github.com/imniko/SetDPI/

OnMessage 0x007E, OnDisplayChange ; System Event: Display changes
Persistent

OnDisplayChange(wParam, lParam, *)
{
    scale_connected := 150
    scale_solo := 100
    display_lg := "\\.\DISPLAY4"
    ; display_internal := "\\.\DISPLAY1"

    ; Determine the scale based on the primary monitor
    ; TODO: find a more stable property
    new_scale := MonitorGetName() == display_lg ? scale_connected : scale_solo
    Sleep 1000 ; setDpi needs to be delayed a little bit, otherwise explorer.exe crashes
    Run("setDpi.exe " . new_scale . " 1")
}
```

[^1]: https://github.com/imniko/SetDPI
[^2]:  https://ahkde.github.io/docs/v2/lib/Monitor.htm