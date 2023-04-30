const CODES = {
	A: 65,
	Z: 90,
};

function createRow(content, index = null) {
	const resize = index ? '<div class="row-resize" data-resize="row" ></div>' : ''
	return `
   <div class="row" data-resizable="true">
      <div class="row-info">
				${index ? index : ""}
				 ${resize}
			</div>
      <div class="row-data">${content}</div>
   </div>
   `;
}
function toColumn(el, index) {
	return `
      <div class="column" data-resizable="true" data-index=${index}>
				${el}
			  <div class="col-resize" data-resize="col"></div>
			</div>
   `;
}
function createCell(_, index) {
	return `
      <div class="ceil" data-index=${index} contenteditable></div>
   `;
}
function toChar(_, index) {
	return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
	const colsCount = CODES.Z - CODES.A + 1;
	const rows = [];
	const cols = new Array(colsCount).fill("").map(toChar).map(toColumn).join("");
	const ceil = new Array(colsCount).fill("").map(createCell).join("");
	rows.push(createRow(cols));
	for (let index = 0; index < rowsCount; index++) {
		rows.push(createRow(ceil, index + 1));
	}

	return rows.join("");
}
