import {ExcelComponent} from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
  static сlassName = `excel__formula`
  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }
}