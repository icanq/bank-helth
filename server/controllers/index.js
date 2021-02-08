const { BankData, ProcessedData, Indicator } = require('../models/index');
const readXlsxFile = require('read-excel-file/node');
class Controller {
  static async getFile(req, res, next) {
    Indicator.findAll({
      include: [{
        model: ProcessedData
      }
      ]
    })
      .then((data) => {
        console.log(data)
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'some error encountered',
        });
      });
  }
  static async upload(req, res) {
    try {
      if (req.file == undefined)
        res.status(400).json('Please upload excel file');
      let path = __basedir + '/uploads/' + req.file.filename;
      readXlsxFile(path)
        .then((rows) => {
          rows.shift();
          let data = [];
          rows.forEach((row) => {
            let datum = {
              periode: row[0],
              sandiBank: row[1],
              kreditKol1: row[2],
              kreditKol2: row[3],
              kreditKol3: row[4],
              kreditKol4: row[5],
              kreditKol5: row[6],
              laba: row[7],
              modal: row[8],
              totalAset: row[9],
              ATMR: row[10],
              bebanOperasional: row[11],
              pendapatan: row[12],
              danaPihakKetiga: row[13],
              NPL:
                ((row[4] + row[5] + row[6]) /
                  (row[2] + row[3] + row[4] + row[5] + row[6])) *
                100,
              ROE: (row[7] / row[8]) * 100,
              ROA: (row[7] / row[9]) * 100,
              CAR: (row[8] / row[10]) * 100,
              BOPO: (row[11] / row[12]) * 100,
              LDR:
                ((row[2] + row[3] + row[4] + row[5] + row[6]) / row[13]) * 100,
            };
            data.push(datum);
          });
          BankData.bulkCreate(data)
            .then((rows) => {
              let processedData = [];
              rows.forEach((row) => {
                const datum = row.dataValues;
                let processedDatum = {
                  BankDatumId: datum.id,
                  periode: datum.periode,
                  NPL: datum.NPL,
                  ROE: datum.ROE,
                  ROA: datum.ROA,
                  CAR: datum.CAR,
                  BOPO: datum.BOPO,
                  LDR: datum.LDR,
                };
                processedData.push(processedDatum);
              });
              ProcessedData.bulkCreate(processedData)
                .then((processed) => {
                  let indicators = [];
                  processed.forEach((data) => {
                    const idk = data.dataValues;
                    let counter = 0;
                    let indicator = {
                      ProcessedDatumId: idk.BankDatumId
                    }
                    if (idk.NPL > 5) {
                      indicator.Rk = 'Red';
                      counter++;
                    } else indicator.Rk = 'Green';
                    if (idk.ROE <= 5 || idk.ROA < 1) {
                      indicator.Pr = 'Red';
                      counter++;
                    } else indicator.Pr = 'Green';
                    if (idk.CAR < 20) {
                      indicator.Re = 'Red';
                      counter++;
                    } else indicator.Re = 'Green';
                    if (idk.BOPO > 80) {
                      indicator.Ef = 'Red';
                      counter++;
                    } else indicator.Ef = 'Green';
                    if (idk.LDR > 94 || idk.LDR < 82) {
                      indicator.Lk = 'Red';
                      counter++;
                    } else indicator.Lk = 'Green';
                    if (counter > 2) {
                      indicator.Komposit = 'Red';
                    } else if (counter == 2) {
                      indicator.Komposit = 'Yellow';
                    } else indicator.Komposit = 'Green';
                    indicators.push(indicator)
                  });
                  Indicator.bulkCreate(indicators)
                    .then((_) => {
                      res.status(200).json({ message: 'Processed!' })
                    })
                    .catch((err) => {
                      console.log(err);
                      res
                        .status(500)
                        .json({ message: 'error', error: err.message });
                    });
                })
                .catch((err) => {
                  console.log(err);
                  res
                    .status(500)
                    .json({ message: 'error', error: err.message });
                });
            })
            .catch((err) => {
              res.status(500).json({ message: 'error', error: err.message });
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;
