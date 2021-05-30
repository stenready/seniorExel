import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
	constructor($root) {
		super($root, {
			name: "Formula",
			listeners: ["click"],
		});
	}
	static сlassName = `excel__formula`;
	toHTML() {
		return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
	}
	onClick(event) {
		console.log(this.$root);
		console.log("on input formula component", event);
	}
}
