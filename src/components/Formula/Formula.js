import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    })
  }

  static className = 'exel__formula'

  toHtml() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }
  onInput(e) {
    console.log('FORMULA OnInput listener', e.target.textContent.trim())
  }
  onClick(e) {
    console.log(e)
  }
}