---
parent:
  - "[[Fleeting MOC]]"
created: 2024-03-30
---

[[Python]] and [[Nix]] can sometimes be really hard to bring together. So it's nice to have some examples how to create packages, dev environments and so forth

## buildFHS (emulating a classic Linux directory structure)

With `buildFHS` python is almost like in a container with binaries at `/usr/bin`

Creating this environment, you can emulate the classic Python approach.

After being in the environment with `nix develop`, you simply create a venv with `python -m venv .venv` and you install packages with `pip`

```nix
{
  description = "A dev environment for streamlit development";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
   };

  outputs = { self, nixpkgs, flake-utils, ... }@attrs:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};

      in {
        devShells.default = (pkgs.buildFHSUserEnv {
          name = "streamlit-env";
          targetPkgs = pkgs: (with pkgs; [
            python312
            python312Packages.pip
            python312Packages.virtualenv
          ]);
        }).env;
      });
}

```
