const mensaje = require('../models/mensajes')

class Mensajes {

    constructor() { }

    async devolver() {
        try {
            return mensaje.find({ })
        } catch (error) {
            throw error
        }
    }

    async buscarPorId(id) {
        try {
            return mensaje.findById({ _id: id })
        } catch (error) {
            throw error
        }
    }

    async guardar(mensaje) {
        try {
            return mensaje.create(mensaje)
        } catch (error) {
            throw error
        }
    }

    async actualizar(id, mensaje) {
        try {
            return mensaje.findByIdAndUpdate(id, mensaje)
        } catch (error) {
            throw error
        }
    }

    async borrar(id) {
        try {
            return mensaje.findByIdAndDelete(id)
        } catch (error) {
            throw error
        }
    }
}

module.exports = new Mensajes()