#macos 

## window manager for macOS

### What is Yabai?

The primary function of yabai is tiling window management; automatically modifying your window layout using a binary space partitioning algorithm to allow you to focus on the content of your windows without distractions. Additional features of yabai include focus-follows-mouse, disabling animations for switching spaces, creating spaces past the limit of 16 spaces, and much more.

### Installation

```shell
--------------------------------------
# https://github.com/koekeishiya/yabai
# MacOS window manager
brew install koekeishiya/formulae/yabai
--------------------------------------
# https://github.com/stedolan/jq
# Lightweight and flexible command-line JSON processor 
brew install jq
--------------------------------------
# https://github.com/koekeishiya/skhd
# Simple hotkey daemon for macOS
brew install koekeishiya/formulae/skhd
--------------------------------------

```

Install Limelight (Color border) (Optional) [https://github.com/koekeishiya/limelight](https://github.com/koekeishiya/limelight)

### Post-Installation

```shell

# ~/.config/yabai/yabairc
#!/usr/bin/env sh
#YABAI STUFF

# bsp or float (default: bsp)
#yabai -m config layout bsp

# My custom space names for my 3 monitor setup. These names are used in some of my scripts.
yabai -m space 1 --label one
yabai -m space 2 --label two
yabai -m space 3 --label three
yabai -m space 4 --label four
yabai -m space 5 --label five
yabai -m space 6 --label six
yabai -m space 9 --label nine

# float system preferences. Most of these just diable Yabai form resizing them.
yabai -m rule --add app="^System Preferences$" sticky=on layer=above manage=off
yabai -m rule --add app="^Karabiner-Elements$" sticky=on layer=above manage=off
yabai -m rule --add app="^Karabiner-EventViewer$" sticky=on layer=above manage=off
yabai -m rule --add app="^Finder$" sticky=on layer=above manage=off
yabai -m rule --add app="^Keka$" sticky=on layer=above manage=off
yabai -m rule --add app="^Alfred Preferences$" sticky=on layer=above manage=off
yabai -m rule --add app="^Disk Utility$" sticky=on layer=above manage=off
yabai -m rule --add app="^System Information$" sticky=on layer=above manage=off
yabai -m rule --add app="^Activity Monitor$" sticky=on layer=above manage=off
yabai -m rule --add app="^Path Finder$" manage=off
yabai -m rule --add app="^TeamViewer$" sticky=off layer=above manage=off
yabai -m rule --add app="Fantastical" manage=off
yabai -m rule --add app="^Spotify$" manage=off
yabai -m rule --add app="^iTerm2$" manage=off
yabai -m rule --add app="^Flux$" manage=off
yabai -m rule --add app="^Time Out$" manage=off
yabai -m rule --add app="^perl_client_app$" manage=off
yabai -m rule --add app="^console$" manage=off
yabai -m rule --add app="^Harvest$" manage=off
yabai -m rule --add app="^CiscoSparkHelper$" manage=off
yabai -m rule --add app="^Logi Options$" manage=off
yabai -m rule --add app="^Cisco Webex Start$" manage=off
yabai -m rule --add app="^Private Internet Access$" manage=off

#find ~/Library/Parallels/Applications\ Menus/ -maxdepth 3 -type f | awk -F'/' '{ print $NF; }' | awk '{$1=$1};1' | sort | uniq | tr "\n" "\0" | xargs -0 -I{} yabai -m rule --add app="^{}\$" title=".*" manage=on

## Some random global settings
#yabai -m config focus_follows_mouse          autoraise
#yabai -m config focus_follows_mouse          on
# New window spawns to the right if vertical split, or bottom if horizontal split
yabai -m config window_placement second_child
yabai -m config window_topmost off
#yabai -m config window_shadow float
yabai -m config window_opacity off
yabai -m config window_opacity_duration 0.00
yabai -m config active_window_opacity 1.0
#yabai -m config normal_window_opacity        0.97
#yabai -m config window_border                on | off

## WITH SIP ENABLED (Installed Limelight seperately, Don't need this)
yabai -m config window_border off

## WTIH SIP DISABLED (Limelight build into Yabai, enable it here)
#yabai -m config window_border on
#yabai -m config window_border_width 3
#yabai -m config active_window_border_color 0xFF40FF00
#yabai -m config normal_window_border_color 0x00FFFFFF
#yabai -m config insert_feedback_color        0xffd75f5f

## some other settings
yabai -m config auto_balance off
yabai -m config split_ratio 0.50
# # set mouse interaction modifier key (default: fn)
yabai -m config mouse_modifier ctrl
# set modifier + right-click drag to resize window (default: resize)
yabai -m config mouse_action2 resize
# set modifier + left-click drag to resize window (default: move)
yabai -m config mouse_action1 move

# general space settings
#yabai -m config focused_border_skip_floating  1
#yabai -m config --space 3 layout             float

## Change how yabai looks
yabai -m config layout bsp
yabai -m config top_padding 2
yabai -m config bottom_padding 2
yabai -m config left_padding 2
yabai -m config right_padding 2
yabai -m config window_gap 10

#Limelight addon (Kill it and start it each time Yabai starts)
killall limelight &>/dev/null
limelight &>/dev/null &

# #Ubersicht widget bar stuff
#yabai -m signal --add event=space_changed \
#action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"nibar-spaces-primary-jsx\"'"
#yabai -m signal --add event=display_changed \
#action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"nibar-spaces-primary-jsx\"'"

#yabai -m signal --add event=space_changed \
#action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"nibar-spaces-secondary-jsx\"'"
#yabai -m signal --add event=display_changed \
#action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"nibar-spaces-secondary-jsx\"'"

# signals
# yabai -m signal --add event=window_destroyed action="yabai -m query --windows --window &> /dev/null || yabai -m window --focus mouse"
#yabai -m signal --add event=space_changed action="yabai -m window --focus $(yabai -m query --windows --window | jq ".id")"
# yabai -m signal --add event=application_terminated action="yabai -m query --windows --window &> /dev/null || yabai -m window --focus mouse"

#testing signals
# yabai -m signal --add event=window_destroyed action="terminal-notifier -message 'window_destroyed'"
# yabai -m signal --add event=application_terminated action="terminal-notifier -message 'application_terminated'"

## If I close the active window, focus on any other visible window.
yabai -m signal --add event=window_destroyed action="bash /Users/jesseskelton/CustomScripts/SwitchSpaces/window-focus-on-destroy.sh"
# yabai -m signal --add event=space_changed action="export CUR_ACTIVE_APP=\"iTerm2\""

echo "yabai configuration loaded.."

#END

```

```shell
# ~/.config/skhd/skhdrc

#SKHD STUFF

# if you're having troubles finding key codes for a key just type skhd --observe in a terminal and type a key. Pretty cool! Or just check the wiki.

## HYPER == SHIFT + CMD + ALT + OPTION

## Quickly restart the yabai launch agent
ctrl + alt + cmd - r : launchctl kickstart -k "gui/${UID}/homebrew.mxcl.yabai"

## Close active application
hyper - backspace : $(yabai -m window $(yabai -m query --windows --window | jq -re ".id") --close)

# test a command
# lshift - x : terminal-notifier -message "lshift - x"
#lshift - x : terminal-notifier -message "$(yabai -m query --windows --window | jq -re ".id")"

## open terminal
#hyper - return : /Applications/iTerm.app/Contents/MacOS/iTerm2

## swap window
hyper - y : yabai -m window --swap west
# shift + alt - j : yabai -m window --swap south
# shift + alt - k : yabai -m window --swap north
hyper - 0x21 : yabai -m window --swap east # 0x21 is the "[" key

## send window to monitor and follow focus
hyper - u : /Users/jesseskelton/CustomScripts/SwitchSpaces/moveWindowLeftAndFollowFocus.sh
hyper - p : /Users/jesseskelton/CustomScripts/SwitchSpaces/moveWindowRightAndFollowFocus.sh

## focus display
ctrl + cmd - 1 : yabai -m window --display 1 yabai -m display --focus 1
ctrl + cmd - 2 : yabai -m window --display 2 yabai -m display --focus 2
ctrl + cmd - 3 : yabai -m window --display 3 yabai -m display --focus 3

## increase window size
#shift + alt - a : yabai -m window --resize left:-20:0
#shift + alt - s : yabai -m window --resize bottom:0:20
#shift + alt - w : yabai -m window --resize top:0:-20
#shift + alt - d : yabai -m window --resize right:20:0

## decrease window size
#shift + cmd - a : yabai -m window --resize left:20:0
#shift + cmd - s : yabai -m window --resize bottom:0:-20
#shift + cmd - w : yabai -m window --resize top:0:20
#shift + cmd - d : yabai -m window --resize right:-20:0

## rotate tree 90
hyper - r : yabai -m space --rotate 90

## flip the tree vertically
hyper - 4 : yabai -m space --mirror y-axis
# mirror tree y-axis
#alt - y : yabai -m space --mirror y-axis
## mirror tree x-axis
#alt - x : yabai -m space --mirror x-axis

#Move active window to next space on current display
shift + lalt + lcmd + ctrl + ralt - 1 : yabai -m query --spaces --space | jq -re ".index" | xargs -I {} bash -c "if [[ '{}' = '1' ]]; then yabai -m window --space 2; elif [[ '{}' = '2' ]]; then yabai -m window --space 1; fi"
shift + lalt + lcmd + ctrl + ralt - 2 : yabai -m query --spaces --space | jq -re ".index" | xargs -I {} bash -c "if [[ '{}' = '3' ]]; then yabai -m window --space 4; elif [[ '{}' = '4' ]]; then yabai -m window --space 3; fi"
shift + lalt + lcmd + ctrl + ralt - 3 : yabai -m query --spaces --space | jq -re ".index" | xargs -I {} bash -c "if [[ '{}' = '5' ]]; then yabai -m window --space 6; elif [[ '{}' = '6' ]]; then yabai -m window --space 5; fi"

# show next space per display
#hyper - 1 : /Users/jesseskelton/CustomScripts/SwitchSpaces/switchAndFocus.sh 1
#hyper - 2 : /Users/jesseskelton/CustomScripts/SwitchSpaces/switchAndFocus.sh 2
#hyper - 3 : /Users/jesseskelton/CustomScripts/SwitchSpaces/switchAndFocus.sh 3
ctrl + alt + cmd + lshift - 1 : /Users/jesseskelton/CustomScripts/SwitchSpaces/switchAndFocusSIP.sh 1
ctrl + alt + cmd + lshift - 2 : /Users/jesseskelton/CustomScripts/SwitchSpaces/switchAndFocusSIP.sh 2
ctrl + alt + cmd + lshift - 3 : /Users/jesseskelton/CustomScripts/SwitchSpaces/switchAndFocusSIP.sh 3

## toggle window fullscreen zoom
hyper - f : yabai -m window --toggle zoom-fullscreen

# cycle through windows
# cycle backwards
#hyper - i : yabai -m query --spaces | jq -re ".[] | select(.visible == 1).index" | xargs -I{} yabai -m query --windows --space {} | jq -sre "add | sort_by(.display, .frame.x, .frame.y, .id) | nth(index(map(select(.focused == 1))) - 1).id" | xargs -I{} yabai -m window --focus {}
#hyper - i : yabai -m query --spaces | jq -re ".[] | select(.visible == 1).index" | xargs -I{} yabai -m query --windows --space {} | jq -sre "add | sort_by(.display, .frame.x, .frame.y, .id) | nth(index(map(select(.focused == 1))) - 1).id" | xargs -I{} yabai -m window --focus {}

#alt - p : yabai -m window --focus stack.prev || yabai -m window --focus prev || yabai -m window --focus last
#
# go to each window WITHOUT going into a stack
# ctrl + alt + cmd + lshift - i : yabai -m query --spaces | jq -re ".[] | select(.visible == 1).index" | xargs -I{} yabai -m query --windows --space {} | jq -re "[.[] | select((.\"stack-index\" <= 1) and (.app != \"Hammerspoon\"))]" | jq -sre "add | sort_by(.display, .frame.x, .frame.y, .id) | nth(index(map(select(.focused == 1))) - 1).id" | xargs -I{} yabai -m window --focus {}
ctrl + alt + cmd + lshift - i : yabai -m query --spaces | jq -re ".[] | select(.visible == 1).index" | xargs -I{} yabai -m query --windows --space {} | jq -re "[.[] | select(.app != \"Hammerspoon\")]" | jq -sre "add | sort_by(.display, .frame.x, .frame.y, .id) | nth(index(map(select(.focused == 1))) - 1).id" | xargs -I{} yabai -m window --focus {}

# ctrl + alt + cmd + rshift - i : yabai -m window --focus stack.prev || yabai -m window --focus stack.last

#hyper - 0x29 : yabai -m query --spaces \
#hyper - o : yabai -m query --spaces | jq -re ".[] | select(.visible == 1).index" | xargs -I{} yabai -m query --windows --space {} | jq -sre "add | sort_by(.display, .frame.x, .frame.y, .id) | reverse | nth(index(map(select(.focused == 1))) - 1).id" | xargs -I{} yabai -m window --focus {}

#alt - n : yabai -m window --focus stack.next || yabai -m window --focus next || yabai -m window --focus first

# go to each window WITHOUT going into a stack
# ctrl + alt + cmd + lshift - o : yabai -m query --spaces | jq -re ".[] | select(.visible == 1).index" | xargs -I{} yabai -m query --windows --space {} | jq -re "[.[] | select((.\"stack-index\" <= 1) and (.app != \"Hammerspoon\"))]" | jq -sre "add | sort_by(.display, .frame.x, .frame.y, .id) | reverse | nth(index(map(select(.focused == 1))) - 1).id" | xargs -I{} yabai -m window --focus {}
ctrl + alt + cmd + lshift - o : yabai -m query --spaces | jq -re ".[] | select(.visible == 1).index" | xargs -I{} yabai -m query --windows --space {} | jq -re "[.[] | select(.app != \"Hammerspoon\")]" | jq -sre "add | sort_by(.display, .frame.x, .frame.y, .id) | reverse | nth(index(map(select(.focused == 1))) - 1).id" | xargs -I{} yabai -m window --focus {}

# Toggle foucus on a stack
ctrl + alt + cmd + lshift - return : yabai -m window --focus stack.next || yabai -m window --focus stack.first

#create a stack
# ctrl + alt + cmd + rshift - 1 : yabai -m query --windows --window | jq -re "." | xargs -I{} yabai -m window 1 --stack {}
# stack next window onto current window
ctrl + alt + cmd + lshift - 0x43 : window=$(yabai -m query --windows --window | jq -r '.id') && yabai -m window east --stack $window || (yabai -m window $window --toggle float && yabai -m window $window --toggle float)

################################################################
############################# UNUSED ###########################
################################################################

## float / unfloat window and center on screen
#alt - t : yabai -m window --toggle float;\
#yabai -m window --grid 4:4:1:1:2:2 ## toggle sticky alt - s : yabai -m window --toggle sticky ## toggle sticky, float and resize to picture-in-picture size alt - p : yabai -m window --toggle sticky;\ yabai -m window --grid 5:5:4:0:1:1 ## change layout of desktop ctrl + alt - a : yabai -m space --layout bsp ctrl + alt - d : yabai -m space --layout float

## toggle window split type
#alt - e : yabai -m window --toggle split

## toggle window border
#shift + alt - b : yabai -m window --toggle border

## create desktop, move window and follow focus
#shift + cmd - n : yabai -m space --create && \
#index="$(yabai -m query --spaces --display | jq 'map(select(."native-fullscreen" == 0))[-1].index')" && \
#yabai -m window --space "${index}" && \
#yabai -m space --focus "${index}"

## create desktop and follow focus
#shift + alt - n : yabai -m space --create && \
#index="$(yabai -m query --spaces --display | jq 'map(select(."native-fullscreen" == 0))[-1].index')" && \
#yabai -m space --focus "${index}"

## destroy desktop
#cmd + alt - w : yabai -m space --destroy

## fast focus desktop
#cmd + alt - x : yabai -m space --focus last
#cmd + alt - z : yabai -m space --focus prev
#cmd + alt - c : yabai -m space --focus next
#cmd + alt - 1 : yabai -m space --focus 1
#cmd + alt - 2 : yabai -m space --focus 2
#cmd + alt - 3 : yabai -m space --focus 3
#cmd + alt - 4 : yabai -m space --focus 4
#cmd + alt - 5 : yabai -m space --focus 5
#cmd + alt - 6 : yabai -m space --focus 6
#cmd + alt - 7 : yabai -m space --focus 7
#cmd + alt - 8 : yabai -m space --focus 8
#cmd + alt - 9 : yabai -m space --focus 9
#cmd + alt - 0 : yabai -m space --focus 10

## move window
#shift + ctrl - a : yabai -m window --move rel:-20:0
#shift + ctrl - s : yabai -m window --move rel:0:20
#shift + ctrl - w : yabai -m window --move rel:0:-20
#shift + ctrl - d : yabai -m window --move rel:20:0

## Swap window
# hyper - y : yabai -m window --warp west
# shift + cmd - j : yabai -m window --warp south
# shift + cmd - k : yabai -m window --warp north
# hyper - 0x21 : yabai -m window --warp east # "[" key

## focus monitor
#ctrl + alt - x  : yabai -m display --focus last
#ctrl + alt - z  : yabai -m display --focus prev || yabai -m display --focus last
#ctrl + alt - c  : yabai -m display --focus next || yabai -m display --focus first
#ctrl + alt - 1  : yabai -m display --focus 1
#ctrl + alt - 2  : yabai -m display --focus 2
#ctrl + alt - 3  : yabai -m display --focus 3


```

### Resources    
Wiki : [](https://github.com/koekeishiya/yabai/wiki)[https://github.com/koekeishiya/yabai/wiki](https://github.com/koekeishiya/yabai/wiki)

