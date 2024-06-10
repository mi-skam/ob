Promise.all([
  import("https://unpkg.com/turndown@7.2.0?module"),
  import("https://unpkg.com/@tehshrike/readability@0.2.0"),
]).then(async ([{ default: Turndown }, { default: Readability }]) => {
  /** CONFIGURATION */

  /* Optional vault name */
  const vault = "ob";

  /* Optional folder name such as "Clippings/" */
  const folder = "Atlas/Notes/Sources/";

  /* Optional tags  */
  let tags = "source/browser";

  /** HELPER */

  function getSelectionHtml() {
    let html = "";
    if (typeof window.getSelection != "undefined") {
      const sel = window.getSelection();
      if (sel.rangeCount) {
        const container = document.createElement("div");
        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
          container.appendChild(sel.getRangeAt(i).cloneContents());
        }
        html = container.innerHTML;
      }
    } else if (typeof document.selection != "undefined") {
      if (document.selection.type == "Text") {
        html = document.selection.createRange().htmlText;
      }
    }
    return html;
  }

  function getFileName(fileName) {
    const userAgent = navigator.userAgent.toLowerCase();
    const isWindows = /windows|win32|win64|ce/gi.test(userAgent);

    if (isWindows) {
      fileName = fileName.replace(":", "").replace(/[/\\?%*|"<>]/g, "-");
    } else {
      fileName = fileName
        .replace(":", "")
        .replace(/\//g, "-")
        .replace(/\\/g, "-");
    }
    return fileName;
  }

  function convertDate(date) {
    const yyyy = date.getFullYear().toString();
    const mm = (date.getMonth() + 1).toString();
    const dd = date.getDate().toString();
    const mmChars = mm.split("");
    const ddChars = dd.split("");
    return (
      yyyy +
      "-" +
      (mmChars[1] ? mm : "0" + mmChars[0]) +
      "-" +
      (ddChars[1] ? dd : "0" + ddChars[0])
    );
  }

  function getMetaContent(attr, value) {
    var element = document.querySelector(`meta[${attr}='${value}']`);
    return element ? element.getAttribute("content").trim() : "";
  }

  /** MAIN */

  /* Parse the site's meta keywords content into tags, if present */
  if (document.querySelector('meta[name="keywords" i]')) {
    const keywords = document
      .querySelector('meta[name="keywords" i]')
      .getAttribute("content")
      .split(",");

    keywords.forEach(function (keyword) {
      let tag = " " + keyword.split(" ").join("");
      tags += tag;
    });
  }

  const selection = getSelectionHtml();

  const { title, byline, content } = new Readability(
    document.cloneNode(true)
  ).parse();

  const markdownify = selection || content;

  const fileName = getFileName(title);

  const markdownBody = new Turndown({
    headingStyle: "atx",
    hr: "---",
    bulletListMarker: "-",
    codeBlockStyle: "fenced",
    emDelimiter: "*",
  }).turndown(markdownify);

  const today = convertDate(new Date());

  // Fetch byline, meta author, property author, or site name
  const author =
    byline ||
    getMetaContent("name", "author") ||
    getMetaContent("property", "author") ||
    getMetaContent("property", "og:site_name");

  // Check if there's an author and add brackets
  const authorBrackets = author ? `"[[${author}]]"` : "";

  /* YAML front matter as tags render cleaner with special chars  */
  //prettier-ignore
  const fileContent =
    "---\n"
    + 'in: "[[Clippings]]"\n'
    + 'related: \n'
    + 'author: ' + authorBrackets + '\n'
    + 'url: ' + document.URL + '\n'
    + 'created: ' + today + '\n'
    + 'tags: ' + tags + '\n'
    + '---\n\n'
    + markdownBody;

  //prettier-ignore
  document.location.href = "obsidian://new?"
    + "file=" + encodeURIComponent(folder + fileName)
    + "&content=" + encodeURIComponent(fileContent)
    + `${vault ? "&vault=" + encodeURIComponent(vault) : ""}`;
});
