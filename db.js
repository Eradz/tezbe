const mongoose = require("mongoose")

const URI = "mongodb+srv://tezonteam:tezonece22@pdfdownloadcluster.tyatu8a.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);
function connectToMongoDb(){
  mongoose.connect(URI)

  mongoose.connection.on("connect", ()=>{
    console.log(`Connected to Mongodb Successfully`)
  })
  mongoose.connection.on("error", (err)=>{
    console.log(`There was an error in connecting to Mongodb: ${err}`)
  })
}

module.exports = { connectToMongoDb }