const caption = document.querySelector('caption')
const tableHead = document.querySelectorAll('th')

const table = document.querySelector('table')
const tbody = table.querySelector('tbody')
const rows = tbody.querySelectorAll('tr')
const thead = table.querySelectorAll('thead')

let collection;
let mdTable = '';

thead.forEach(function (x) {
  const data = x.querySelectorAll('th');
    data.forEach(y => console.log(y.textContent))
    const head = [];
    data.forEach(function (y) {
      head.push(y.textContent);
    });
    const [a, b, c, d] = head;
    mdTable = mdTable + `|${a}|${b}|${c}|${d}|
`
})

mdTable = mdTable + `| - | - | - | - |
`

rows.forEach(function (x) {
  const data = x.querySelectorAll('td');
    data.forEach(y => console.log(y.textContent))
    const row = [];
    data.forEach(function (y) {
      row.push(y.textContent);
    });
    const [a, b, c, d] = row;
    mdTable = mdTable + `|${a}|${b}|${c}|${d}|
`
})

mdTable = mdTable.trim()

console.log(mdTable)

let mdResultDiv = document.getElementById('MD')
let pElement = document.createElement('pre')
pElement.innerHTML = mdTable

document.body.appendChild(pElement);