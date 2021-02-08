function calcNPL (payload) {
  console.log(payload, '<<<ok')
  let total = (payload['Kredit Kol 1'] +payload['Kredit Kol 2'] + payload['Kredit Kol 3'] + payload['Kredit Kol 4'] + payload['Kredit Kol 5'])
  return (payload['Kredit Kol 3'] + payload['Kredit Kol 4'] + payload['Kredit Kol 5'])/total
}

module.exports = {
  calcNPL
}