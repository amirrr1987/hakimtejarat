require('module-alias/register')
const express = require("express")
const app = express()
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("@/routes")
const config = require('config');
class App {
  constructor({appName, port}){
    this.appName = appName
    this.port = port
    this.setMiddleware()
    this.setupDatabase()
    this.setupServer()
    this.setupRoutes()
  }

  setupRoutes(){
    app.use('/api', routes)
  }
  async setupDatabase(){
    mongoose.connect(config.get("dbAddress"),{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=>{
      console.log('db is connected');

    }).catch(()=>{
      console.log('db not connected');

    })



  }
  setMiddleware(){
    app.use(express.json())
    app.use(cors());
    if (app.get("env") === "development")
    app.use(function (err, req, res, next) {
      if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res
            .status(500)
            .send({
              code: 500,
              message: "JSON parse error",
              success: false,
            })
      }
      next(err)
    });
  }
  setupServer(){
    app.listen(this.port, ()=>{
      console.log(`${this.appName} run on port: ${this.port}`);
    })
  }
}

module.exports = App