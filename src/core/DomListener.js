import { capitalize } from "./utils";

export class DomListener {
	constructor($root, listeners = []) {
		this.$root = $root;
		this.listeners = listeners;
	}
	initDOMListener() {
		this.listeners.forEach((listener) => {
			const method = getMethodName(listener);
			if (!this[method])
				throw new Error(
					`Метод  ${method} должен  быть реализован в компоненте ${this.name}`
				);

			this[method] = this[method].bind(this);
			this.$root.on(listener, this[method]);
		});
	}
	removeDOMListener() {
		this.listeners.forEach((listener) => {
			const method = getMethodName(listener);
			this.$root.off(listener, this[method]);
		});
	}
}

function getMethodName(eventType) {
	return "on" + capitalize(eventType);
}
