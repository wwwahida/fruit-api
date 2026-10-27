// controllers deal with requests and responses
const Fruit = require('../models/FruitModel')

const index = async (req, res) => {
    try {
        const fruits = await Fruit.showAll()
        res.status(200).send(fruits)
    } catch (error) {
        res.status(500).send({ error : "server error"})
    }
}

const show = async(req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const fruit = await Fruit.show(name)
        res.status(200).send(fruit)
    } catch (error) {
        res.status(404).send({ error : "fruit not found"})
    }
}

const create = async (req, res) => {
    try { 
        const newFruit = await Fruit.create(req.body)
        res.status(201).send(newFruit)
    } catch (error) {
        res.status(409).send({ error : "conflict"})
    }
}

const update = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const fruit = await Fruit.show(name)
        const result = await fruit.update(req.body)
        res.status(200).send(result)
    } catch (error) {
        res.status(404).send({ error: "fruit not found" })
    }
}

const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const fruit = await Fruit.show(name)
        const result = await fruit.destroy()
        res.status(204).send(result)
    } catch (error) {
        res.status(404).send({ error: "fruit not found" })
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}