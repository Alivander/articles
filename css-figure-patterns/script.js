const COUNT_PATTERNS = 100;

const table = document.querySelector('.table');
const template = document.querySelector('template').content;

const patternsList = Array(COUNT_PATTERNS).fill()
    .map((node, index) => createCell(index));

table.append(...patternsList);

function createCell(index) {
    const cell = template.cloneNode(true);
    const cellTitle = cell.querySelector('.cell__title');
    const pattern = cell.querySelector('.pattern');
    const currentNumber = index + 1;

    pattern.classList.add(`pattern_${ currentNumber }`);
    cellTitle.innerText = `pattern ${ currentNumber }`

    return cell;
}
