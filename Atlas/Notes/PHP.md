
# Composer

## Installation -Windows

1. Install [PHP for Windows](https://windows.php.net/download/)
2. Install [Composer for Windows](https://getcomposer.org/Composer-Setup.exe)

## Create-Project

```bash

composer create-project getkirby/plainkit kirby "3.8.*” # Version string is optional

```

  

# Kirby

Needs `gd` enabled.
```

;extension=bz2
extension=curl
;extension=ffi
;extension=ftp
;extension=fileinfo
extension=gd ; <--
;extension=gettext
```

## Hints for PHPStorm
[https://fvsch.com/kirby-typing](https://fvsch.com/kirby-typing)

```php

/** @var Kirby\Cms\Page $page */

```

To generate ide helper for ****************PHPStorm****************, execute the following snippet and add some ****PHPDoc**** vars  (read the comments in the script) for let the ide analalyze the structure.



[https://gist.github.com/mi-skam/69804184247bf56d73d99f14e206cdd6](https://gist.github.com/mi-skam/69804184247bf56d73d99f14e206cdd6)