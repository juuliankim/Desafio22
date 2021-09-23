const producto = require('../models/productos')

class Productos {
    constructor() { }

    async listar() {
        try {
            return producto.find({})
        } catch (error) {
            throw error
        }
    }

    async listarPorId(id) {
        try {
            return producto.findById({ _id: id })
        } catch (error) {
            throw error
        }
    }

    async guardar(nuevoProducto) {
        try {
            console.log(nuevoProducto)
            return producto.create(nuevoProducto)
        } catch (error) {
            throw error
        }
    }

    async actualizar(idProducto, nuevoProducto) {
        try {
            return producto.findByIdAndUpdate(idProducto, nuevoProducto)
        } catch (error) {
            throw error
        }
    }

    async borrar(idProducto) {
        try {
            return producto.findByIdAndDelete(idProducto)
        } catch (error) {
            throw error
        }
    }
}

module.exports = new Productos()