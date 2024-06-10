---
parent:
  - "[[Fleeting MOC]]"
created: 2024-04-09
  2024-04-11T02:45:48+02:00
tags:
  - code/tutorial
languages: bash
---

```bash
src="/path/to/src"
target="/path/to/target"
dir="mydir"
```

## Backup

```bash
tar -czv -C $src $dir | split -d -b 3900M - $target/$dir.tar.gz.part-
```

## Restore

```bash
cat $target/$dir.tar.gz.part-* | tar -xzv -C $src
```

## Functions

```bash
backup() {
    local src="${1}"
    local src_dir=$(dirname "$src")
    local src_base=$(basename "$src")
    local target_dir="${2:-(mktemp -d)}"

    if [ -z "$src" ]; then
        echo "Usage: backup source_directory [directory_to_backup]"
        return 1
    fi

	if [ ! -d "$target_dir" ]; then
		mkdir -p "$target_dir" || { echo "Error: Failed to create target directory '$target_dir'."; return 1; }
	fi

    # Check if pigz is available, if not, fallback to regular tar
    if command -v pigz > /dev/null; then
        tar --use-compress-program=pigz -cf - -C "$src_dir" "$src_base" | split -d -b 3900M - "$target_dir/$src_base-$(date +'%Y-%m-%d').tar.gz.part-"
    elif command -v pbzip2 > /dev/null; then
        tar --use-compress-program=pbzip2 -cf - -C "$src_dir" "$src_base" | split -d -b 3900M - "$target_dir/$src_base-$(date +'%Y-%m-%d').tar.bz2.part-"
    else
        tar -czf - -C "$src_dir" "$src_base" | split -d -b 3900M - "$target_dir/$src_base-$(date +'%Y-%m-%d').tar.gz.part-"
    fi

    echo "Backup completed. Parts are located in: $target_dir"
}


restore() {
    local archive="$1"
    local target_dir="${2:-$(pwd)}"

    if [ -z "$archive" ]; then
        echo "Usage: reciproke archive_path [target_directory]"
        return 1
    fi

    if [ ! -f "$archive" ]; then
        echo "Error: Archive '$archive' not found."
        return 1
    fi

    # Check if the archive is split
    if [ "$(file -b "$archive" | cut -d' ' -f1)" == "ASCII" ]; then
        cat "$archive"* | tar -xzvf - -C "$target_dir"
    else
        tar -xzvf "$archive" -C "$target_dir"
    fi
}

```

---

[[Tutorials]]
