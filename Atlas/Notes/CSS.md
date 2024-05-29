---
aliases:
publish: true
date: 2023-08-04
---
# CSS

## Learn

[CSS Diner](https://flukeout.github.io/) 
[Flexbox Froggy](https://flexboxfroggy.com/)


## Backwards compatible

```css
button {
  color: black;
  background: white
  /* if linear-gradient() is supported */
  background-image: linear-gradient(...);
  /* if paint() is supported */
  background-image: paint(...);
  
}
```

## Flexbox

```css
.gallery {
  display: flex;
  /* horizontally or vertically */
  flex-direction: column; /* default: row *
  /* wrap it */
  flex-wrap: wrap;
  /* align it along the _main_ axis */
  justify-content: center;
  /* and to the _cross_ axis */
  align-items: center;
}

```

## Images

To deal with different aspect ratio, one can set the `object-fit` property to `cover` which kind of automagically fixes the invidual ARs for all images.


## Selectors

Getting sibling elements: `~` or `+`. Latter selects only one sibling, the other oll of them who fit the criteria.

**element:first-child** This element works as constraint to a list of elements matched by the selector.

```html
<div class="table">
<bento />
<plate />
<plate>
  <orange /> <!-- plate orange:first-child or plate > orange  -->
  <orange />
  <orange />
</plate>
<pickle class="small" />
</div>
```



## pseudo elements

**::after**

It creates a "virtual" element after the last child element. Like another `img` without content. In [[FCC]] we used it, to pad the last image element in a photo gallery to the left. 

```css
.gallery::after {
  content: "";
  width: 350px;
}
```

**::not()**

Selects all element which *do not have* a certain propert.

