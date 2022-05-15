const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
  res.send('Hello Dulanji!')
})

app.listen(port, () => {
  console.log(`Example app Dulanji ${port}`)
})