const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('College Booking server is running')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})