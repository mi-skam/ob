---
aliases:
  - web components
created: 2024-02-06
---

Modern browser support Web components natively. They replace the need for external template engines like [[handlebars]].

## Simple "big-bang" tag

To create a simple element, we need to do the following steps:

1. create a class that inherits from `HTMLElement`
2. attach to a _shadow root_
3. optional: create some content
4. map the _class_ to a _tag_ with `customElements.define()`

```html
<script>
  // 1. We need to base our element on HTMLElement
  class BigBang extends HTMLElement {
    constructor() {
      super();
      // 2. create a shadowRoot under the element, either 'closed' or 'opened'
      const shadowRoot = this.attachShadow({ mode: "closed" });

      // 3. create some content under the shadow root
      const div = document.createElement("div");
      div.textContent = "Big Bang!";
      shadowRoot.append(div);
    }
  }

  // 4. create a mapping between the class and a tag
  customElements.define("big-bang", BigBang);
</script>

<big-bang> </big-bang>
```
