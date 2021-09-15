
const express = require('express')
const app = express()
const port = 8080
const router = require('./routes')

const db = require("./models")
db.sequelize.sync();

app.use(express.json())

app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
