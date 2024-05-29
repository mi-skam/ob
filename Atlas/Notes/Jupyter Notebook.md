A [[Jupyter Notebook]] is a frontend to create python scripts. We use [[Python Environments#Miniconda|Conda]] to install our [[Python Environments]] 

### Show all currently re-gistered kernels
^0f3097
```shell
jupyter kernelspec list
# sample output #
Available kernels:
  python3    C:\Users\plumps\miniconda3\share\jupyter\kernels\python3
  
```

^f9ca92
## Install JavaScript / TypeScript kernel 

The tslab kernel allows to execute [[JavaScript]] and [[TypeScript]] in a Jupyter notebook. To install it, we need [[NodeJS]].

```shell
npm i -g tslab
# test if the command is available to the shell
tslab install --version
tslab install [optional: --python=python3]
```

Check for the [[#Show all currently re-gistered kernels|installed kernels.]]

### Alternative: deno kernel
Install the experimental (at 30.01.24) deno kernel, which serves the same purpose as `tslab`.

[Install deno first](https://docs.deno.com/runtime/manual)

Install the kernel


## Tensor Flow Example
It's a useful [pattern](https://towardsdatascience.com/how-to-set-up-anaconda-and-jupyter-notebook-the-right-way-de3b7623ea4a) to only install [[#Jupyter Notebook]] in the *base* environment and create environments for specific runtimes or versions of runtimes, which then can be selected from the jupyter instance. To add a *sub-environment* to the dropdown, install `ipykernel`.

```shell
conda install ipykernel
```

![[Pasted image 20240123113627.png|200]]

Here is an example for `TensorFlow`, following the [guide](https://www.tensorflow.org/install/pip#windows-native_1)

> [!NOTE] Note
> Do not install TensorFlow with conda. It may not have the latest stable version. pip is recommended since TensorFlow is only officially released to PyPI.

```shell
# We create a environment for tensorFlow 2.x
conda create -n tf-2.0 pip ipykernel python=3.9.18
conda activate tf-2.0

# Install CUDA, cuDNN
conda install -c conda-forge cudatoolkit=11.2 cudnn=8.1.0

# Anything above 2.10 is not supported on the GPU on Windows Native
pip install "tensorflow<2.11" 

```

Verify the setup:
```shell
# if it works at all...
python -c "import tensorflow as tf; print(tf.reduce_sum(tf.random.normal([1000, 1000])))"
# if it supports the GPU
python -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"
```

`environment.yml` for tensorflow 2.0 running on windows: ![[tf-2.0.yml]]