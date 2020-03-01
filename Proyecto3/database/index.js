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
            if (this.currentConnection) return resolve(this.currentConnection);
            mongoClient.connect(url, options, (error, connection) => {
                if (error) return reject(error);
                this.currentConnection = connection;
                resolve(this.currentConnection);
            });
        });
    },
    collection(database, collection) {
        return this.connect().then(connection => connection.db(database).collection(collection));
    }
};