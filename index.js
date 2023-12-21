const express = require('express')
const app = express()
const port = 8080
const contentRouter = require('./routes/index')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(contentRouter)

app.listen(port, ()=>{
    console.log(`Server berjalan pada http://localhost:${port}`)
})