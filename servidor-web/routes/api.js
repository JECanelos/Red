const express = require('express');
const mongoDb = require('mongodb');

const router = express.Router();
const mongoClient = mongoDb.MongoClient;
const driver = 'mongodb';
const host = 'localhost';
const port = '27017';
const url = `${driver}://${host}:${port}`;
const options = { useNewUrlParser: true };

router.get('/', (request, response) => {
    let cantidad = request.query.cantidad;
    cantidad = cantidad ? parseInt(cantidad) : 10;

    mongoClient.connect(url, options, (error, connection) => {
        if (error) return response.status(500).send(error.stack);

        const database = connection.db('myApp');
        const users = database.collection('users');
        users.find().limit(cantidad).toArray((error, users) => {
            if (error) return response.status(500).send('Error en búsqueda');
            response.send(users);
        });
    });
});

router.post('/', (request, response) => {
    response.send({ 'message': 'hola desde post' });
});

module.exports = router;
