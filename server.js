

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const router = require('./src/route/bibliotecaRoute')
const index = require('./src/route/index')
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/biblioteca', router)

app.get('/', index)

app.listen(PORT, () => {
    console.info(`Api rodando na porta ${PORT}`)
})