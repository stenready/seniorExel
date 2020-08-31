import {capitalize} from "@core/utils";

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root class DomListener`)
    }
    this.$root = $root
    this.listeners = listeners
  }
  initDOMListeners() {
    this.listeners.forEach( (listener) => {
      const methodName = getNameMethod(listener)
      if (!this[methodName]) {
        throw new Error(` Реализуйте метот ${methodName} в компоненте ${this.name} `)
      }
      this[methodName] = this[methodName].bind(this)
      this.$root.on(listener, this[methodName])
    } )
  }

  removeDOMListeners() {
    this.listeners.forEach( (listener) => {
      const methodName = getNameMethod(listener)
      this.$root.off(listener, this[methodName])
    } )
  }
}

// eslint-disable-next-line no-unused-vars
function getNameMethod(string) {
  return 'on' + capitalize(string)
}