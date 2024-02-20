const express=require('express')
const app=express()
const path= require('path')
const port= 3000


const menuroute=require('./routes/menu.routes')

app.use(express.static('public'))

app.set('view engine','ejs')
app.set('views',__dirname+"/views")

app.use("/menu",menuroute)


app.listen(port,()=>console.log(`http://localhost:${port}`))
