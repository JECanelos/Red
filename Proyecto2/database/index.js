const mongoDb = require('mongodb');
const mongoClient = mongoDb.MongoClient;
const driver = 'mongodb';
const host = 'localhost';
const port = '27017';
const url = `${driver}://${host}:${port}`;
const options = { useNewUrlParser: true };

module.exports = {
    connect() {
        return new Promise((resolve, reject) => {
            mongoClient.connect(url, options, (error, connection) => {
                if (error) return reject(error);
                resolve(connection);
            });
        });
    },
    collection(database, collection) {
        // return this.connect().then(connection => connection.db(database).collection(collection));
        return this.connect().then(connection => {
            return connection.db(database).collection(collection);
        });
    }
};