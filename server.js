const express = require('express')
const downloadRoute = require("./Routes/downloads")
const uploadRoute = require('./Routes/upload')
const {connectToMongoDb} = require("./db")
const PORT = 3000 || process.env.PORT

const app = express()
connectToMongoDb()

app.use(express.json())
app.use("/download", downloadRoute)
// use localhost:3000/upload to upload your files
app.use("/upload", uploadRoute)
app.get("/", (req, res)=>{
    res.send("Hello and welcome")
})


app.listen(PORT, () =>{
    console.log("server started on port 3000")
})
