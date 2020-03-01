const mongo = require('../../database');

module.exports = (request, response) => {
    // 'header': request.headers
    // 'body': request.body
    // 'params': request.params
    // 'query': request.query
    const nombre = request.body.nombre;
    const ciudad = request.body.ciudad ? request.body.ciudad : 'UIO';
    const edad = parseInt(request.body.edad);

    if (!nombre) return response.status(422).send({ 'state': 'Missing name' });
    if (!edad) return response.status(422).send({ 'state': 'Missing age' });

    const newUser = {
        nombre,
        edad,
        ciudad
    };

    mongo.collection('myApp', 'users').then(collection => {
        collection.insertOne(newUser, error => {
            if (error) return response.status(500).send(error);
            response.status(201).send(newUser);
        });
    }).catch(error => {
        response.status(500).send(error);
    });
};