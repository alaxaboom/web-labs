const router = require('./routers')

const express = require('express')
const mongoose = require('mongoose')
const PORT =process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use("/auth",router)
const start = async()=>{
    try{
        await mongoose.connect(`mongodb+srv://alaxaboom:1323709egor@cluster0.0gqnz3k.mongodb.net/test_reg?retryWrites=true&w=majority&appName=Cluster0`)
        app.listen(PORT,()=>console.log(`server start on ${PORT}`))
    }catch(e){
        console.log(e)
    }
}
start()