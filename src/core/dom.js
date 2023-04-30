class Dom {
  constructor(selector) {
    this.$el =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;
  }

  html(html = "") {
    if (typeof html === "string") {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  get dataset() {
    return this.$el.dataset;
  }

  closest(selector) {
    return $(this.$el.closest(selector))
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  on(eventType, cb) {
    this.$el.addEventListener(eventType, cb);
    return this;
  }

  off(eventType, cb) {
    this.$el.removeEventListener(eventType, cb);
    return this;
  }

  clear() {
    this.html("");
    return this;
  }

  css(styles = {}) {
    for (const stylesKey in styles) {
      this.$el.style[stylesKey] = styles[stylesKey]
    }
    return this;
  }

  height() {
    return this.$el.offsetHeight
  }

  append(node) {
    if (node instanceof Dom) node = node.$el;
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = "") => {
  const $el = document.createElement(tagName);
  if (classes) $el.classList.add(classes);
  return $($el);
};
