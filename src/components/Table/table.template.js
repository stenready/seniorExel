const CODES = {A: 65, Z: 90}

// mein function
export function createTable(countRows) {
  const countCols = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(countCols)
      .fill('')
      .map(getCharCode)
      .map(createColumn)
      .join('')

  rows.push(createRow(null, cols)) // формируем первый row с буквами

  for (let i = 0; i < countRows; i++) {
    const cells = new Array(countCols)
        .fill('')
        .map(createCeil)
        .join('')

    rows.push(createRow(i + 1, cells)) // формируем все остальные row с ячейками
  }

  return rows.join('')
}

// helper functions
function getCharCode(_, idx) {
  return String.fromCharCode(CODES.A + idx)
}

function createRow(i, content) {
  return `
    <div class="row">
        <div class="row-info">${i ? i : ''}</div>
        <div class="row-data">${content}</div>
    </div>
  `
}

function createColumn(el) {
  return `
    <div class="column">${el}</div>
  `
}

function createCeil() {
  return `
    <div class="ceil" contenteditable></div>
  `
}
