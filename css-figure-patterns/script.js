const COUNT_PATTERNS = 10;

const table = document.querySelector('.table');
const fragment = document.createDocumentFragment();

// TODO
// used html-templates

const patternsList = Array(COUNT_PATTERNS).fill()
    .map((node, index) => createCell(index));

table.append(...patternsList);

function createCell(index) {
    const cell = document.createElement('div');
    const cellTitle = document.createElement('p');
    const field = document.createElement('div');
    const pattern = document.createElement('div');

    cell.classList.add('cell');
    cellTitle.classList.add('cell__title');
    field.classList.add('field');
    pattern.classList.add(`pattern_${ index + 1 }`);
    cellTitle.innerText = `pattern ${ index + 1 }`
    field.appendChild(pattern);
    cell.appendChild(cellTitle);
    cell.appendChild(field);

    return cell;
}
