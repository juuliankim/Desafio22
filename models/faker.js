const faker = require('faker')
const productos = require('../api/productos')

class Faker {

    constructor() {
        this.productosTabla = []
    }

    generarProductos(cantidad) {
        this.productosTabla = []
        for (let i = 0; i < cantidad; i++) {
            this.productosTabla.push({
                title: faker.commerce.product(),
                price: faker.commerce.price(),
                thumbnail: faker.image.image()
            })
        }
        return this.productosTabla
    }
}

module.exports = new Faker()