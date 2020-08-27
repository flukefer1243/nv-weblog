const {Cargo} = require('../models')

module.exports = {
    // get all cargo
    async index (req, res) {
        try {
            const cargos = await Cargo.findAll()
            res.send(cargos)
        } catch (err){
            res.status(500).send({
                error: 'The cargo information was incorrect'
            })
        }
    },
    // create cargo
    async create (req, res) {
        try {
            const cargo = await Cargo.create(req.body)
            res.send(cargo.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create cargo incorrect'
            })
        }
    },
    // edit cargo, suspend, active
    async put (req, res) {
        try {
            await Cargo.update(req.body, {
                where: {
                    id: req.params.cargoId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update cargo incorrect'
            })
        }
    },
    // delete cargo
    async remove (req, res) {
        try {
            const cargo = await Cargo.findOne({
                where: {
                    id: req.params.cargoId
                }
            })
            if(!cargo){
                return res.status(403).send({
                    error: 'The cargo information was incorrect'
                })
            }
            await cargo.destroy()
            res.send(cargo)
        } catch (err) {
            res.status(500).send({
                error: 'The cargo information was incorrect'
            })
        }
    },
    // get cargo by id
    async show (req, res) {
        try {
            const cargo = await Cargo.findById(req.params.cargoId)
            
            if(!cargo){
                return res.status(403).send({
                    error: 'The cargo information was '+req.params.cargoId
                })
            }
            res.send(cargo)
        } catch (err) {
            res.status(500).send({
                error: 'The cargo information was incorrect'
            })
        }
    },
    // get cargo by id
    async showlast (req, res) {
        try {
            const cargo = await Cargo.findAll({
                limit: 1,
                order: [ [ 'createdAt', 'DESC' ]]
                })
            if(!cargo){
                return res.status(403).send({
                    error: 'The cargo information was '+req.params.cargoId
                })
            }
            res.send(cargo)
        } catch (err) {
            res.status(500).send({
                error: 'The cargo information was incorrect'
            })
        }
    },
}