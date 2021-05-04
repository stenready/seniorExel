import {ExcelComponent} from "../../core/ExcelComponent";

export class Table extends ExcelComponent {
  static сlassName = `excel__table`
  toHTML() {
    return `
            <div class="row">

                <div class="row-info"></div>
                <div class="row-data">
                    <div class="column">
                        A
                    </div>
                    <div class="column">
                        B
                    </div>
                    <div class="column">
                        C
                    </div>
                </div>

            </div>

            <div class="row">

                <div class="row-info">1</div>
                <div class="row-data">
                    <div class="ceil selected" contenteditable>qwdwqdwqdqw</div>
                    <div class="ceil">wqdqwdq</div>
                    <div class="ceil">qwdqwd</div>
                </div>

            </div>

            <div class="row">

                <div class="row-info">2</div>
                <div class="row-data">
                    <div class="ceil ">qwdwqdwqdqw</div>
                    <div class="ceil">wqdqwdq</div>
                    <div class="ceil">qwdqwd</div>
                </div>

            </div>
    `
  }
}
