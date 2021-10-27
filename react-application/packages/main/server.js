const express = require('express')
const path = require('path')
const app = express()

app.use((req, res, next) => {
    console.log(req.url)
    next()
})

app.use(express.static(path.resolve(__dirname, "./dist")))

app.listen(3000)