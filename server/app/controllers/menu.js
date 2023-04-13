const MenuValidator = require('../validatolrs/menu')
const MenuModel = require("../models/menu")
const _ = require("lodash")
class Menu {
    async create(req,res){
        const myBody = _.pick(req.body, "name url icon")

        try{
            const {success, error} = await MenuValidator.create(myBody)
            if(!success){
                return res.status(400).send(error.issues)
            }
        }
        catch (e) {
            console.log(e)
        }

        try{
            const menu = await new MenuModel(myBody)
            await menu.save()
            return res.status(200).send({
                code: 200,
                success: true,
                data: menu,
                message: "route found"
            })
        }
        catch (e) {
            console.log(e)
        }

    }
    async getOne(req,res){
        try{
            const menu = await MenuModel.findById(req.params.id)
            return res.status(200).send({
                code: 200,
                success: true,
                data: menu,
                message: "route found"
            })
        }
        catch (e) {
            console.log(e)
        }

    }
    async getAll(req,res){
        try{
            const menus = await MenuModel.find()
            return res.status(200).send({
                code: 200,
                success: true,
                data: menus,
                message: "get all method"
            })
        }
        catch (e) {
            console.log(e)
        }

    }
    async update(req,res){
        const myBody = _.pick(req.body, ["name", "url", "icon"])
        try{
            const updatedMenu = await MenuModel.findByIdAndUpdate(req.params.id , myBody,{new: true})
            return res.status(200).send({
                code: 200,
                success: true,
                data: updatedMenu,
                message: "update method"
            })
        }
        catch (e) {
            console.log(e)
        }

    }
    async delete(req,res){
      const deleteMenu = await MenuModel.findByIdAndRemove(req.params.id)
        if(!deleteMenu){
            return res.status(404).send({
                code: 404,
                success: false,
                error: deleteMenu,
                message: 'id not found'
            })
        }
        res.status(201).send({
            code: 201,
            success: true,
            data: deleteMenu,
            message: "delete method"
        })
    }
}
module.exports = new Menu()