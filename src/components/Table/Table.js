import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from "@/components/Table/table.template";

export class Table extends ExcelComponent {
  static className = 'exel__table'
  toHtml() {
    return createTable(20)
  }
}