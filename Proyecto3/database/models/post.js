const mongoDb = require('mongodb');
const dbName = 'myApp';
const collectionName = 'users';

module.exports = {
    findAll(idUser, pagina, cantidad) {
        return new Promise((resolve, reject) => {
            dbDriver.collection(dbName, collectionName).then(collection => {
                const projection = {
                    "_id": 0,
                    "nombre": 0,
                    "genero": 0,
                    "edad": 0,
                    "direccion": 0,
                    "telf": 0,
                    "ciudad": 0,
                    posts: {
                        $slice: [pagina * cantidad, cantidad]
                    }
                };
                collection.findOne({ '_id': new mongoDb.ObjectID(idUser) }, { projection }, (error, user) => {
                    if (error) return reject(error);
                    resolve(user.posts);
                });
            });
        });
    },
    findOne(idUser, idPost) {
        return new Promise((resolve, reject) => {

        });
    },
    create(idUser, newPost) {
        return new Promise((resolve, reject) => {
            dbDriver.collection(dbName, collectionName).then(collection => {
                newPost['_id'] = mongoDb.ObjectID(Date.now());
                collection.findOneAndUpdate(
                    { '_id': new mongoDb.ObjectID(idUser) },
                    { $push: { 'posts': newPost } },
                    error => {
                        if (error) return reject(error);
                        resolve(newPost);
                    }
                );
            });
        });
    },
    delete(idUser, idPost) {
        return new Promise((resolve, reject) => {
            dbDriver.collection(dbName, collectionName).then(collection => {
                collection.findOneAndUpdate(
                    { '_id': new mongoDb.ObjectID(idUser) },
                    { $pull: { 'posts': { '_id': new mongoDb.ObjectID(idPost) } } },
                    (error, post) => {
                        if (error) return reject(error);
                        resolve(post.value);
                    }
                );
            });
        });
    }
};