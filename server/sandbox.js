const xlsx = require('xlsx')
const wb = xlsx.readFile("./dummy.xlsx", { cellDates: true})

let ws = wb.Sheets["dummy"]

const data = xlsx.utils.sheet_to_json(ws);

console.log(data[0])

// for (let kredit of Object.values(data)) {
//   totalKredit += kredit;
// }

// console.log(totalKredit);