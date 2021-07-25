const express = require('express')
const router = express.Router()
const controller = require('../api/productos')
const Faker = require('../models/faker')

router.get('/vista-test', async (req, res) => {
    try {
        res.render('vista', { hayProductos: true, productos: Faker.generarProductos(10)})
    } catch(error) {
        console.log(error)
        throw error
    }
})

router.get('/vista-test/:cant', async (req, res) => {
    let cantidad = req.params.cant
    res.render('vista', {hayProductos: true, productos: Faker.generarProductos(cantidad)})
})

router.get('/productos/buscar', async (req, res) => {
    try {
        let productos = await controller.buscar(req.query)
        res.send(productos)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/productos/guardar', async (req, res)=> {
    try {
        let productos = await controller.guardar(req.body)
        res.json(productos)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.put('/productos/actualizar/:id', async (req,res)=> {
    try {
        let update = {
            title: req.body.title,
            price: req.body.price,
            thumbnail: req.body.thumbnail
        }
        res.send(controller.actualizar(req.params.id, update))
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/productos/borrar/:id', async (req,res)=> {
    try {
        await controller.borrar(req.params.id)
        res.send('El producto se borro con exito')
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router