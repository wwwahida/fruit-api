const fruits = require('../fruits.json')

// oop
class Fruit {
    constructor(fruit) {
        this.genus = fruit.genus
        this.name = fruit.name
        this.id = fruit.id
        this.family = fruit.family
        this.order = fruit.order
        this.nutritions = fruit.nutritions
    }

    static showAll() {
        return fruits.map(q => new Fruit(q))
    }

    static show(name) {
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)
        if (fruit) {
            return new Fruit(fruit)
        } else {
            throw new Error('fruit not found')
        }
    }

    static create(data) {
        const newFruit = data
        if (!data.name) {
            throw 'name is required'
        }

        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == data.name.toLowerCase())

        if (fruit) {
            throw 'the fruit already exists'
        } else {
            newFruit[`id`] = Math.max(...fruits.map(fruit => fruit.id)) + 1
            fruits.push(newFruit)
            return new Fruit(newFruit)
        }
    }

    update(dat{
        const updateFruit = fruit.find((fruit) => fruit.name.toLowerCase() == this.name.toLowerCase())

        if (updateFruit) {
            if (data.genus) updateFruit.genus = data.genus
            if (data.name) updateFruit.name = data.name
            if (data.family) updateFruit.family = data.family
            if (data.order) updateFruit.order = data.order
            if (data.nutritions) updateFruit.nutritions = data.nutritions

            return new Fruit(updateFruit)
        } else {
            throw new Error('fruit not found')
        }
    }

    destroy() {
        const deletedFruit = fruits.find((fruit) => fruit.name.toLowerCase() == this.name.toLowerCase())

        if (deletedFruit) {
            const index = fruits.indexOf(deletedFruit)
            fruits.splice(index, 1)
        } else {
            throw new Error('fruit not found')
        }
    }
}

module.exports = Fruit

