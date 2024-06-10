---
parent:
  - "[[Fleeting MOC]]"
created: 2024-01-25
tags: []
---

[[Nix]] is a language used by [[NixOS]] to descriptively build Linux systems.

It is:

1. purely functional
2. lazy
3. purpose-built

It has some disadvantages[^1] , like the steep learning curve and the scattered documentation (flakes vs non-flakes approaches), but all in all it's a great tool to learn, as it's not only used to create systems, but also for the files in the home-directory [[Home-Manager]], and some advanced DevOps-Tools like [[NixOps]] and [[Colmena]].

> [!note] Using nix in practical terms, mostly mean this
>
> - Language: syntax and semantics
> - Libraries: `builtins` and `pkgs.lib`
> - Developer tools: testing, debugging, linting, formatting, …
> - Generic build mechanisms: `stdenv.mkDerivation`, trivial builders, …
> - Composition and configuration mechanisms: `override`, `overrideAttrs`, overlays, `callPackage`, …
> - Ecosystem-specific packaging mechanisms: `buildGoModule`, `buildPythonApplication`, …
> - NixOS module system: `config`, `option`, …
>   [^2]

## Language

1. Interactive evaluation: `nix repl` (load nixkpgs with `:l <nixpkgs>` and force eager evaluation with `:p <expression>`)
2. Using `nix-instantiate --eval <file>` (equivalent to `:p` is `--strict` for nix-instantiate)
3. Every nix file is only allowed to resolve to **one** expression.

### Primitives

```nix
# numbers
42
1.72394

# strings & paths
"hello"
./some-file.json

# strings support interpolation
"Hello ${name}"

# multi-line strings (common prefix whitespace is dropped)
''
first line
second line
''

# lists (note: no commas!)
[ 1 2 3 ]

# attribute sets (field access with dot syntax)
{ a = 15; b = "something else"; }

# recursive attribute sets (fields can reference each other)
rec { a = 15; b = a * 2; }
```

### Attribute set

Collection of name-value-paris like a _JSON_ file:

```nix
{
  string = "hello";
  integer = 1;
  float = 3.141;
  bool = true;
  null = null;
  list = [ 1 "two" false ];
  attribute-set = {
    a = "hello";
    b = 2;
    c = 2.718;
    d = false;
  }; # comments are supported
}
```

_recursive attribute sets_ allow to access attributes from within the set and are denoted by a `rec { ... }`

### Operators

| Syntax          | Description                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| +, -, \*, /     | Numerical operations                                                        |
| +               | String concatenation                                                        |
| ++              | List concatenation                                                          |
| ==              | Equality                                                                    |
| >, >=, <, <=    | Ordering comparators                                                        |
| &&              | Logical `AND`                                                               |
| \|\|            | Logical `OR`                                                                |
| e1 -> e2        | Logical implication (i.e. !e1 \| e2)                                        |
| !               | Boolean negation                                                            |
| set.attr        | Access attribute `attr` in attribute set `set`                              |
| set ? attribute | Test whether attribute set contains an attribute                            |
| left // right   | Merge `left` & `right` attribute sets, with the right set taking precedence |

### let ... in ...

_Let expressions_ or _Let bindings_ create values to be introduced into a scope.

```nix
let
  a = 1;
in
  a + a
```

> Only expressions within the `let` expression itself can access the newly declared names. **We say: the bindings have local scope.**

### Attribute access

Attributes in a set are accessed with a dot.

```nix
let
  attrset = { a = { b = { c = 1; }; }; };
in
  attrset.a.b.c
```

### with ...; ...

Allows the access of _attributes_ without referencing their _attribute set_ again and again

```nix
let
  a = {
    x = 1;
    y = 2;
    z = 3;
  };
in
with a; [x y z]
```

### inherit

_inherit_ is a shortcode to introduce the value of a name from an existing scope the the same name in a nested scope.

```nix
let
  x = 1;
  y = 2;
in
{
  inherit x y;
}
```

equals

```nix
let
  x = 1;
  y = 2;
in
{
  x = x;
  y = y;
}
```

You can also also prepend a specific _attribute_ set. For the _attribute set_ `a = { x = 1; y = 2; }`you can introduce it with `inherit (a) x y` which is equivalent to `x = a.x; y = a.y;`

```nix
let
  inherit({x = 1; y = 2; }) x y;
in
[x y]
```

### String interpolation

merges the value into a _string_

```nix
let
  name = "Nix";
in
"Hi ${name}"
```

> [!WARNING] Warning
> You may encounter strings that use the dollar sign (`$`) before an assigned name, but no braces (`{ }`):

These are _not_ interpolated strings, but usually denote variables in a shell script.

In such cases, the use of names from the surrounding Nix expression is a coincidence.

Example:

```nix
let
  out = "Nix";
in
"echo ${out} > $out"
```

results in `echo Nix > $out`

### Filesystem paths

```nix
 /absolut/path
./relative
./.              # current path
./..             # parent path
```

_Lookup paths_ are also known as angle bracket syntax. The value of a lookup paths is a path depending on `builtins.nixPath`

```nix
nix-repl> :p builtins.nixPath

[ { path = "/nix/var/nix/profiles/per-user/root/channels/nixos"; prefix = "nixpkgs"; } { path = "/etc/nixos/configuration.nix"; prefix = "nixos-config"; } { path = "/nix/var/nix/profiles/per-user/root/channels"; prefix = ""; } ]
```

```nix
nix-repl> :p <nixpkgs>
/nix/var/nix/profiles/per-user/root/channels/nixos/
nix-repl> :p <nixpkgs/lib>
/nix/var/nix/profiles/per-user/root/channels/nixos/lib
```

### Indented strings

also known as "multi-line strings"

```nix
nix-repl> ''
          aeaeae
          aeaea
          ''
"aeaeae\naeaea\n"
```

### Functions

A function in nix **always** takes **one argument** and have no names, they are **lambdas**

```nix
nix-repl> (x: x + 1) 3
4

# fails
nix-repl> (x: x + 1) 3 4
error: attempt to call something which is not a function but an integer

       at «string»:1:1:

            1| (x: x + 1) 3 4
             | ^
```

You can _simulate_ multiple arguments, by nesting functions or ...

```nix
# is a curried function, and returns a function, waiting for one more argument
(x: y: x + y) 1
«lambda @ «string»:1:5»

nix-repl> (x: y: x + y) 1 2
3
```

by using attribute sets.

```nix
# destructures a attr-set in x and y
nix-repl> ({x, y}: x + y) {x = 1; y = 2;}
3

# default values are set by "?"
nix-repl> ({x, y ? 2}: x + y) {x = 1;}
3
```

We can combine lambdas with _let-in_ to "simulate" a name

```nix
nix-repl> let f = {x, y}: x + y;
          in
          f {x = 1; y = 2;}
3

# same but different 🍀
let f = num: with num; x + y;
          in
          f {x = 1; y = 2;}
3
```

### Function Libraries

There are two important libraries: **builtins** and **pkgs.lib**

#### builtins

Nix comes with many functions that are built into the language. They are implemented in C++ as part of the Nix language interpreter.

With `import` we can read and evaluate nix-code which is saved in a nix file.

```nix
nix-repl> import ./1-calculator.nix
3

# import the function and  apply it
nix-repl> import ./5-function-1.nix 3
4
```

#### pkgs.lib

The _nixpkgs_ repository contains a large list of useful functions in an attribute set called `lib` which is written in nix.

```nix
let pkgs = import <nixpkgs> { }; in pkgs.lib.strings.toUpper "hello nix."

"HELLO NIX."
```

### Impurities

We need to observe the outside world to get something actually done. To get those inputs in Nix, we must translate them to **build inputs**. We have two interfaces _paths_ and _special functions_ (e.g. fetchers).

#### Paths

When we read something from a path, it will copied to the nix store with it's hash as part of the file name.

```shell
echo "hello nix" > data
nix-repl> "${./data}"
"/nix/store/rvqs5v9qsldbc76zlvxvrq6k0m42gmcs-data"
```

As we can see the file path _evaluates_ to its file path in the nix store.

#### Fetchers

We can get data over the network as well, with the following `builtins`
`fetchUrl`, `fetchTarball, fetchGit, fetchClosure`

```nix
let
  url = builtins.fetchurl
    "https://github.com/NixOS/nix/archive/7c3ab5751568a0bc63430b33a5169c5e4784a0ff.tar.gz";
  src = builtins.fetchTarball
    "https://github.com/NixOS/nix/archive/7c3ab5751568a0bc63430b33a5169c5e4784a0ff.tar.gz";
in ''
  url: ${url}
  src: ${src}''
```

### Derivations

We use derivations to _build results_. Those _build results_ can in turn be used as inputs for other derivations.

The core function is `derivation`, which creates a specification for a single derivation. This specification defines the _build inputs_ and the _builder_ and the output path.

```nix
let
  simpleDerivation = derivation {
    name = "hello-nix";
    system = builtins.currentSystem;
    builder = "my-builder";
  };
in simpleDerivation

«derivation /nix/store/vy6a9kyd2rjb7i6gxsvxqxb6mg2dm8jr-hello-nix.drv»
```

So let's look at the input. We get a _derivation_ object back and a _drv file_

#### drv file

```
Derive([("out","/nix/store/l1b9680aha0linamfv597j12vfwv12rm-hello-nix","","")],[],[],"aarch64-darwin","/bin/bash",[],[("builder","/bin/bash"),("name","hello-nix"),("out","/nix/store/l1b9680aha0linamfv597j12vfwv12rm-hello-nix"),("system","aarch64-darwin")])
```

A drv file is an _intermediate file format_ that incorporates all information of the nix expression as a single _Derive_ function.

1. The **output paths** (there can be multiple ones). By default nix creates one out path called "out".
2. The **list of input derivations**. It's empty because we are not referring to any other derivation. Otherwise, there would be a list of other .drv files.
3. The **system and the builder executable**.
4. Then a list of **environment variables** passed to the builder.

```shell
$ nix derivation show /nix/store/5hsr158zrlbi4ris5j8lbl8x7v9l4gbc-hello-nix.drv
{
  "/nix/store/5hsr158zrlbi4ris5j8lbl8x7v9l4gbc-hello-nix.drv": {
    "args": [],
    "builder": "/bin/bash",
    "env": {
      "builder": "/bin/bash",
      "name": "hello-nix",
      "out": "/nix/store/l1b9680aha0linamfv597j12vfwv12rm-hello-nix",
      "system": "aarch64-darwin"
    },
    "inputDrvs": {},
    "inputSrcs": [],
    "name": "hello-nix",
    "outputs": {
      "out": {
        "path": "/nix/store/l1b9680aha0linamfv597j12vfwv12rm-hello-nix"
      }
    },
    "system": "aarch64-darwin"
  }

```

We can now try to _build_ our derivation in nix repl, assuming we have the expression in a nix file called `12-derivation.nix`, we notice that our fake builder is invoked and

```shell
nix-repl> d = import ./12-derivation.nix
nix-repl> d
«derivation /nix/store/vy6a9kyd2rjb7i6gxsvxqxb6mg2dm8jr-hello-nix.drv»
nix-repl> :b d
error: builder for '/nix/store/vy6a9kyd2rjb7i6gxsvxqxb6mg2dm8jr-hello-nix.drv' failed with exit code 71;
       last 1 log lines:
       > sandbox-exec: execvp() of 'my-builder' failed: No such file or directory
       For full logs, run 'nix-store -l /nix/store/vy6a9kyd2rjb7i6gxsvxqxb6mg2dm8jr-hello-nix.drv'
```

...or outside of `nix repl`

```shell
nix-store -r /nix/store/vy6a9kyd2rjb7i6gxsvxqxb6mg2dm8jr-hello-nix.drv
```

### Platform

We understand platform as the combination of architecture and operating system (os), e.g. arm64 (aarch64) and macOS (darwin) becomes `aarch64-darwin`

## Flakes

> Flakes introduces a policy for **managing dependencies** between Nix expressions, it improves reproducibility, composability and usability in the Nix ecosystem

Flakes use a similar to dependencies as Node.js. So what `package.json` is for Node.js is `flake.nix` for Nix and the same is valid for `package-lock.json` and `flake.lock`

It tackles two hard problems prior to Flakes:

1. **Reproducibility** -> nix builds weren't as hermetic as possible (args, system type, envs, nix files...)
2. **Composability**-> It was hard to pull in packages and modules from different sources

As of 1) it's now possible to cache the **_evaluation of nix evaluation results_** (calculating _.drv files and builds_ )

### Commands

#### nix shell and nix run

`nix shell` throws you in a (shell) environment with the package build and accessible and added to your $PATH

`nix run` does the same but runs the _default package_ automatically.

_Example:_

```shell
nix shell nixpkgs#btop
# nix run nixpkgs#btop does the same
nix shell nixpkgs#btop --command btop
```

This part following the `#` is called a _fragment_ (attribute). The is not a flake in it's own right, but a different _output_ of the same flake (`nixpkgs` in this case)

#### nix flake metadata|show

`nix show` shows outputs of a flake. `nix metadata` shows useful metadata.

#### nix build

just builds a flake

#### nix develop

enters a shell with all run-time and build-time dependencies. You can use all the life cycle phases of the nix build package.

```shell
nix develop nixpkgs#hello

# downloads hello
unpackPhase

# configures the package
cd hello-*
configurePhase

# builds the package
buildPhase

# running hello
./hello
```

### Registry

Flake locations, such as `github:edolstra/dwarffs` are URL-like shortcuts for real URLs `git+https://github.com/edolstra/dwarffs` and you can look at the current list of known shortcuts with `nix registry list` %% Where is the shortcut github defined ? %%

### Template

To create an empty flake just enter `nix flake init`

#### premade

You can create clone existing _templates_ with `nix flake init -t <template_url>`.
To get a list of premade templates run `nix flake show templates`

_Example_:

Simple c program
`nix flake init templates#c-hello`

### Manual

A trivial or minimal flake would look like this:

```nix
{
	outputs = { self }: {}
}
```

To evaluate one, we need to add an attribute, which will be accessed as `.#foo`
`nix eval .#foo`

```nix
{
	outputs = { self }: {
		foo = "bar";
	}
}
```

Simple Flake to compile a `hello.c` file:

```nix
{
  # step 1 - description, optional metadata
  description = "A flake for building Hello Flakes!";

  # step 2 - defining inputs, we need stdenv from nixpkgs
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  # step 3 - defining the output, largely the same as a "normal" nix file, but wrapped in a function that provides the inputs and the attributes for the different architectures
  outputs = { self, nixpkgs }: {
    packages.aarch64-darwin.default =
      with import nixpkgs { system = "aarch64-darwin"; };
      stdenv.mkDerivation {
        name = "hello";
        src = self;
        buildPhase = "clang -o hello ./hello.c";
        installPhase = "mkdir -p $out/bin; install -t $out/bin hello";
      };
  };
}
```

hello.c:

```c
#include <stdio.h>

int main() {
	printf("Hello Flake!\n");
	return 0;
}

```

Now you can build the whole thing with our commands we learned

```
# using nix build
nix build
./result/bin/hello

# ... or nix run
nix run

#... or nix shell
nix shell --command hello
```

#### Updating inputs

As Flakes is managing all inputs in `flakes.lock` we need to _intentionally_ update the inputs by using `nix flake lock --update-input <input>`

[^1]: https://nixos-and-flakes.thiscute.world/introduction/advantages-and-disadvantages
[^2]: https://nix.dev/tutorials/nix-language
