const mongo = require('../index');

module.exports = {
    all(pagina = 0, cantidad = 10) {
        return new Promise((resolve, reject) => {
            mongo.collection('myApp', 'users').then(collection => {
                collection.find()
                    .limit(cantidad)
                    .skip(pagina * cantidad)
                    .toArray((error, users) => {
                        if (error) return reject(error);
                        resolve(users);
                    });
            });
        });
    }
};