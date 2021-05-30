const CODES = {
	A: 65,
	Z: 90,
};

function createRow(content, index = null) {
	return `
   <div class="row">
      <div class="row-info">${index ? index : ""}</div>
      <div class="row-data">${content}</div>
   </div>
   `;
}
function toColumn(el) {
	return `
      <div class="column">${el}</div>
   `;
}
function createCell() {
	return `
      <div class="ceil" contenteditable></div>
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
