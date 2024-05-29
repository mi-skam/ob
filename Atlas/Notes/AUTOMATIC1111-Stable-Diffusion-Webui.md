---
parent: "[[Stable Diffusion MOC]]"
date: 2023-12-11
tags:
  - 🦠
modified: 2023-12-11T15:06:54+01:00
---

## Installation

### Requirements
1. Python 3.10 or Python 3.11
2. [AUTOMATIC1111/stable-diffusion-webui: Stable Diffusion web UI (github.com)](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
3. Install Dreambooth Extension (For Training only), Load a non-emaonly version of SD from [huggingface](https://huggingface.co/runwayml/stable-diffusion-v1-5/tree/main)

webui-user.bat
```
@echo off

set PYTHON=C:\Users\plumps\AppData\Local\Programs\Python\Python310\python.exe
set GIT=
set VENV_DIR=
set COMMANDLINE_ARGS=--listen --share --xformers --enable-insecure-extension-access
call webui.bat
```


## Prompt Engineering

### Basic rules

1. **detailed** and **specific**
2. **powerful** keywords

