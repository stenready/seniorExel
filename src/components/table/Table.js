import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "./table.template";
import {resizeHandler} from "@/components/table/table.resize";
import {canResize} from "@/components/table/helpers";


export class Table extends ExcelComponent {
  static сlassName = `excel__table`;

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }
  onMousedown(e) {
    if (canResize(e)) {
      resizeHandler(e, this.$root)
    }
  }

  toHTML() {
    return createTable(15);
  }
}
