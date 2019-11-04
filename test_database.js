const {Pool, Client} = require('pg')
const connectionString = 'postgressql://Student:@localhost:5432/thermostat'
const client = new Client({
  connectionString:connectionString
})
client.connect()
client.query('SELECT * FROM settings', (err, res) => {
  console.log(err, res)
  var hash = (res.rows[0])
  var temp = hash['temperature']
  var psm = hash['psm']
  // var temp_hash = err.Result.rows[0];
  console.log(temp)
  console.log(psm)
  // console.log(res.rows[0])
  client.end()
})
