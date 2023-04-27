import {ExcelComponent} from "../../core/ExcelComponent";
import {createTable} from "./table.template";
import {$} from "@core/dom";


export class Table extends ExcelComponent {
  static сlassName = `excel__table`;

  constructor($root, options) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  // onMouseup(e) {
  //   console.log(e, 'mouseup')
  // }
  //
  // onMousemove(e) {
  //   // console.log(e, 'onMousemove')
  // }

  // onClick(e) {
  //   console.log(e, 'click')
  // }

  onMousedown(e) {
    if (e.target.getAttribute('data-resize')) {
      // console.log('start resizing')
      const $target = $(e.target);
      const $parent = $target.closest('[data-resizable="true"]')
      const coords = $parent.getCoords()
      // console.log($parent.getCoords(), 'parent')

      document.onmousemove = (evt) => {
        const delta = Math.floor(evt.pageX - coords.right)
        console.log(delta, 'delta')
      }
    }
    // console.log(resize, 'resize')
    // col-resize
    // console.log(e.target, 'onMousedown--target')
  }

  toHTML() {
    return createTable(20);
  }
}
