// const xlsx = require('xlsx')
// const wb = xlsx.readFile("./dummy.xlsx", { cellDates: true })
// const calcNPL = require('./utils')

// let ws = wb.Sheets["dummy"]

// const data = xlsx.utils.sheet_to_json(ws);

// console.log(data[1])

// console.log(data.includes('Kredit Kol'), '<<< iok')

// let total = Number(data[1]['Kredit Kol 1'] + data[1]['Kredit Kol 2'] + data[1]['Kredit Kol 3'] + data[1]['Kredit Kol 4'] + data[1]['Kredit Kol 5'])


// console.log(total)
// // for (let kredit of Object.values(data)) {
// //   totalKredit += kredit;
// // }

// // console.log(totalKredit);

// // sequelize model:generate --name BankData --attributes periode:integer,sandiBank:integer,kreditKol1:integer,kreditKol2:integer,kreditKol3:integer,kreditKkol4:integer,kreditKol5:integer,laba:integer,modal:integer,totalAset:integer,ATMR:integer,bebanOperasional:integer,pendapatan:integer,danaPihakKetiga:integer

// // sequelize model:generate --name ProcessedData --attributes periode:integer,NPL:integer,ROE:integer,ROA:integer,CAR:integer,BOPO:integer,LDR:integer

// // sequelize model:generate --name Log --attributes date:date,user:string

let a = ['a','a','b','c']

let b = new Set(a)

console.log(b, 'ini b')

let c = [...b]

console.log(c, 'ini c')