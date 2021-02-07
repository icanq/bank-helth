const { BankData, ProcessedData } = require('../models/index');
// const db = require('../models/index')
const readXlsxFile = require('read-excel-file/node');
class Controller {
  static async getFile(req, res, next) {
    BankData.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          msg: err.message || 'some error encountered',
        });
      });
  }

  static async upload(req, res) {
    try {
      if (req.file == undefined) {
        return res.status(400).json('Please upload excel file');
      }
      console.log(req.file.filename, 'ini');
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
            };
            data.push(datum);
          });
          BankData.bulkCreate(data)
            .then(() => {
              res.status(200).json({ msg: 'uploaded succesfully' });
            })
            .catch((err) => {
              console.log(err, 'dari sini');
              res.status(500).json({ msg: 'error', error: err.message });
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
