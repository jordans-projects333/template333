if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
app = express()

mongoose.connect(process.env.DATABASE_URL, ()=> {console.log('Database connected')}, e => console.log(e))
app.use(cors({origin: 'http://localhost:5000'}))

app.listen(process.env.PORT || 5000, console.log('listening on port 5000'))