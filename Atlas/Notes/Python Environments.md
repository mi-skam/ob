---
created: 2024-01-23
aliases:
  - conda
---

## Miniconda

To get started on Windows, install _Miniconda_ per `winget install Anaconda.Miniconda3`

[Here](https://docs.conda.io/projects/miniconda/en/latest/) are the links to the installer to miniconda for _all_ platforms.

### nix / home-manager

Little note to systems using [[Home-Manager]]: As we control the init files for bash, you need to manage what usually `conda init` is doing by yourself - as it tries to alter `.bashrc or .zshrc.

I ran `conda init` myself and captured the content to a arbitrary config sh:

```
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/plumps/miniconda3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/plumps/miniconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/plumps/miniconda3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/plumps/miniconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
```

This is sourced from `.bashrc`

### powershell

I added a `conda-hook` to my powershell profile, to have `conda` setup and in my `$PATH` and the `(base)` environment automatically _activated_.

```powershell
start $PROFILE
# THESE LINES MUST BE IN $PROFILE

# Miniconda module
Import-Module "C:\Users\plumps\miniconda3\shell\condabin\conda-hook.ps1"
Invoke-Conda activate base
#
```

### Environments

After the installation _base_ is the only setup environment. You can the following commands to interact with _environments_.

```shell
# create new environments
conda create -n <name>
# create a new environment from a environment.yml
conda create -n <name> -f environment.yml
# update packages of a environment.yml and remove obsolete deps
conda env update -f environment.yml --prune

# install packages
conda install <package>
conda remove <installed_package>

# Checking and switching Conda environments
conda env list
conda activate <name>
conda deactivate

# Delete a conda environment
conda env remove -n <name>

# clone environments
conda create -n <name> --clone <source>

# export the environments (conda and pip packages)
conda env export -n <name> > environment.yml
```

Update all packages in the current environment

```shell
conda update --all
```

### Enable conda-forge

Conda-Forge is a huge and very practical _channel_ that extends the current set of _anaconda_ built-in channels.

```shell
conda config --add channels conda-forge
# Activate `strict` channel priority (`strict` will be activated by default in conda 5.0)
conda config --set channel_priority strict
```

## Jupyter Notebook

[[Jupyter Notebook]] can be easily installed using conda, with a focus on installing it in the base environment and switching between sub-environments.

```shell
conda install -c conda-forge notebook
conda install -c conda-forge nb_conda_kernels
```

Install _pip_ if needed, to create _sub-environments_

```shell
conda install pip
```

Install jupyter console

```shell
conda install jupyter_console
```
