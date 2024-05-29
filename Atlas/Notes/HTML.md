---
parent: "[[Web Development]]"
date: 2024-01-16
tags:
  - 🦠
modified: 2024-01-17T12:08:27+01:00
---

# HTML

## Design Principles

- *Compatibility*
	- Support Existing Content
	- Do Not Reinvent the Wheel
- *Utility*
	- Solve real problems
	- Priority of Constituencies
	- Security by Design
	- Separation of Concerns
- *Interoperability*
	- Well-defined Behavior
	- Avoid Needless Complexity
	- Handle Errors
- *Universal Access*
	- Media Independence
	- Support World Languages
	- Accessibility 

## Anti-Patterns

- Fixed width
- Bad contrast, font, colours
- Pixel-perfect Layout
- Lack of captions for videos
- Lack of keyboard accessibility
- Removing focus indicator

## Backwards compatible

If a tag is not supported, for example it does not know how to render a certain video in a `<video>` element, it falls back to the encapsulated tags. 


> [!NOTE] Fallback to video download

```html
<video src="video.mp4">
  <p>Can't play it.
    <a href="video.mp4">Download it</a>.
  </p>
</video>
```

## Semantic Elements

![[semantic_elements.png]]

## Accessibility

### How a screen reader user surfs the web

<iframe width="560" height="315" src="https://www.youtube.com/embed/OUDV1gqs9GA?start=445" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Buildless

To create buildless dev environments, the following features are required by the browser.

1. native Modules
2. *import* maps
3. *constructable* stylesheets

### native modules

We can load modules natively in a browser.

```html
<!doctype html>
<script type="module">
  import * as lit from 'lit';
  console.log(lit);
</script>
```

### import maps

A import map is something like a native `package.json` for browsers. They do look like this

```html
<!-- Add import for Lit, etc. -->
<script type="importmap">
  {
    "imports": {
      "lit": "https://ga.jspm.io/npm:lit@2.2.3/index.js"
    },
    "scopes": {
      "https://ga.jspm.io/": {
        "@lit/reactive-element": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.2/development/reactive-element.js",
        "lit-element/lit-element.js": "https://ga.jspm.io/npm:lit-element@3.2.0/development/lit-element.js",
        "lit-html": "https://ga.jspm.io/npm:lit-html@2.2.3/development/lit-html.js"
      }
    }
  }
</script>
```

As this is a little cumbersome to create manually, we can use tools like `jspm` that create this map on a file basis.

```
# install jspm
npm i -g jspm
# update a html with a importmap
jspm link index.html -o index.html
```

