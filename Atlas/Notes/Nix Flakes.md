## Enable Flakes

Add this to your nix config:

```nix
 # Enable Nix Flakes
  nix.settings = {
    experimental-features = "nix-command flakes";
  };
```

## Generating hashes for Nix packages
```shell
nix-prefetch-url <url> | xargs nix hash to-sri --type sha256
```

### Creating a venv style shell.nix for python tools / development

`flake.nix`:

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
        pythonEnv = pkgs.python3.withPackages (ps:
          with ps;
          [
            # Add Python packages here
            pip
          ]);
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pythonEnv
            # Add other build inputs if necessary
          ];
        };
      });
}

```

To **autoload** the environment, use a `.envrc` file with `use flake` as content.

If you need to install additional packages, create a `venv` first. 

## nix run

runs programs (from packages) ad hoc.

Syntax

```shell
nix run "<ressource>#program"
# <ressource> can be
# nixpkgs
# github:<org>/<repo>
echo "Hello nix" | nix run "nixpkgs#ponysay"
```

## nix develop

### remote

opens a develop environment with a set of programs, or environment variables, shell hooks to facilitate developing. 

```shell
nix develop "github:DeterminateSystems/zero-to-nix#example"
# run a command directly from the env
nix develop "github:DeterminateSystems/zero-to-nix#javascript" --command node --eval "console.log('1 + 1 = ' + (1 + 1))"
```

### local

To work with a local version we can **clone** a *remote* flake with `nix flake init --template`

Like so `nix flake init --template github:DeterminateSystems/zero-to-nix#javascript-dev`, copies 
- `flake.nix` (defines the flake)
- `flake.lock` (pins all flake inputs) into our directory. 

```shell
nix develop
```

## nix build

it builds a flake and outputs it's result to `./result`

## nix search

Find packages.

`nix search nixpkgs cargo`

## Raspberry Pi

Here I have a classic nixos configuration for [[Raspberry Pi Nixos]]
