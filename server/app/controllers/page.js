const PageValidator = require('../validatolrs/page')
const PageModel = require("../models/page")
const _ = require("lodash")
class Page{
    async create(req,res){
        // const myBody = _.pick(req.body, ["title","content","url","img"])
console.log(req.params);
        // res.send(req.body)

        // const {success, error} = await PageValidator.create(myBody)
        // if(!success){
        //     return res.status(400).send(error.issues)
        // }

        // const page = await new PageModel(myBody)
        // await page.save()
        // return res.status(200).send({
        //     code: 200,
        //     success: true,
        //     data: page,
        //     message: "route found"
        // })
    }
    async getAll(req,res){
        console.log('get all');
    }
    async getOne(req,res){

    }
    async update(req,res){

    }
    async delete(req,res){

    }
}
module.exports = new Page()