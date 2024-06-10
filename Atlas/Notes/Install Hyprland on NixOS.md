---
parent: "[[Fleeting MOC]]"
created: 2024-04-02
  2024-04-05T15:01:40+02:00
tags:
  - code/tutorial
languages: nix
---

Enable these options:

```nix
programs.hyprland = {
  enable = true;
  xwayland.hidpi = true;
  xwayland.enable = true;
};

# Hint Electon apps to use wayland
environment.sessionVariables = {
  NIXOS_OZONE_WL = "1";
};
```

This activates screensharing

```nix
services.dbus.enable = true;
xdg.portal = {
  enable = true;
  wlr.enable = true;
  extraPortals = [
    pkgs.xdg-desktop-portal-gtk
  ];
};
```

Required packages

```nix
environment.systemPackages = with pkgs; [
  hyprland
  swww # for wallpapers
  xdg-desktop-portal-gtk
  xdg-desktop-portal-hyprland
  xwayland
];
```

## Adding waybar

```nix
nixpkgs.overlays = [
  (self: super: {
    waybar = super.waybar.overrideAttrs (oldAttrs: {
      mesonFlags = oldAttrs.mesonFlags ++ [ "-Dexperimental=true" ];
    });
  })
];

environment.systemPackages = with pkgs; [
  meson
  wayland-protocols
  wayland-utils
  wl-clipboard
  wlroots
];
```

## Adding fonts

```nix
fonts.fonts = with pkgs; [
  nerdfonts
  meslo-lgs-nf
];
```

## Configuration

`~/.config/hypr/start.sh`:

```shell
#!/usr/bin/env bash

# initialize wallpaper daemon
swww init &
# set wallpaper
swww img ~/path/to/file.png &

# networking
nm-applet --indicator &

waybar &
dunst
```

`~/.config/hypr/hyprland.conf`:

```shell
exec-once=bash ~/.config/hypr/start.sh
```

---

[[Snippets]]
