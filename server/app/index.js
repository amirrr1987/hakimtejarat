const express = require("express")
const app = express()
const port = 6000
class App {
  constructor(){
    this.setupServer()
  }
  setupServer(){
    app.listen(port, ()=>{
      console.log(`App run on port: ${port}`);
    })
  }
}

module.exports = App