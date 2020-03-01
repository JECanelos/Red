const mongoDb = require('mongodb');
const dbName = 'myApp';
const collectionName = 'users';

module.exports = {
    login(email, password) {
        return new Promise((resolve, reject) => {
            dbDriver.collection(dbName, collectionName).then(collection => {
                collection.findOne({email, password}, (error, user) => {
                    if (error) return reject(error);
                    resolve(user);
                });
            });
        });
    },
    findAll(pagina = 0, cantidad = 10) {
        return new Promise((resolve, reject) => {
            return dbDriver.collection(dbName, collectionName).then(collection => {
                collection.find()
                    .limit(cantidad)
                    .skip(pagina * cantidad)
                    .toArray((error, users) => {
                        if (error) return reject(error);
                        resolve(users);
                    });
            });
        });
    },
    findOne(id) {
        return new Promise((resolve, reject) => {
            return dbDriver.collection(dbName, collectionName).then(collection => {
                collection.findOne({ '_id': new mongoDb.ObjectID(id) }, (error, user) => {
                    if (error) return reject(error);
                    resolve(user);
                });
            });
        });
    },
    create(newUser) {
        return new Promise((resolve, reject) => {
            return dbDriver.collection(dbName, collectionName).then(collection => {
                collection.insertOne(newUser, error => {
                    if (error) return reject(error);
                    resolve(newUser);
                });
            });
        });
    },
    update(id, updatedValues) {
        return new Promise((resolve, reject) => {
            return dbDriver.collection(dbName, collectionName).then(collection => {
                collection.findOneAndUpdate(
                    { '_id': new mongoDb.ObjectID(id) },
                    { $set: updatedValues },
                    { 'returnOriginal': false },
                    (error, updatedUser) => {
                        if (error) return reject(error);
                        resolve(updatedUser.value);
                    });
            });
        });
    },
    delete(id) {
        return new Promise((resolve, reject) => {
            return dbDriver.collection(dbName, collectionName).then(collection => {
                collection.findOneAndDelete({ '_id': new mongoDb.ObjectID(id) }, (error, deletedUser) => {
                    if (error) return reject(error);
                    resolve(deletedUser.value);
                });
            });
        });
    }
};