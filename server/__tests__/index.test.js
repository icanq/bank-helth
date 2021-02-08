const { BankData, ProcessedData, Logs, Indicator } = require('../models/index');
const request = require('supertest');
const fs = require('mz/fs');
const app = require('../app');
let testFilePath = null;

describe('POST /api/v1/endpoint - upload a new file', () => {
  const filePath = `${__dirname}/dummy.xlsx`;
  it('should upload the test file', () =>
    fs.exists(filePath).then((exists) => {
      if (!exists) throw new Error('file does not exist');
      return request(app)
        .post('http://localhost:3001/upload')
        .attach('file', filePath)
        .then((res) => {
          const { success, message, filePath } = res.body;
          expect(success).toBeTruthy();
          expect(message).toBe('Uploaded successfully');
          expect(typeof filePath).toBeTruthy();
          testFilePath = filePath;
        })
        .catch((err) => console.log(err));
    }));
});
