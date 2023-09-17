const express = require ('express')
const app= express()

app.use(express.static('public'))
app.use(express.static('assets'))
app.use(express.static('images'))



app.listen(3000)