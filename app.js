const express = require ('express')
const app= express()

app.use(express.static('public'))

app.get('/index',function(req,res){
    res.sendFile(__dirname+'/public/index.html')
})
app.get('/generic',function(req,res){
    res.sendFile(__dirname+'/public/generic.html')
})

app.get('/elements',function(req,res){
    res.sendFile(__dirname+'/public/elements.html')
})

app.listen(3000)