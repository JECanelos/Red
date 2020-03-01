const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:27017/testdatabase'

MongoClient.connect(url, { useNewUrlParser: true }, function(error, connection) {
    if (error) throw error
    const database = connection.db()
    const conditions = {age: {$gt: 31}}
    const fields = {projection: {name: 1, age: 1, _id:0}}
    database.collection('players').find(conditions, fields).toArray(function(error, player) {
        if (error) throw error
        console.log(player)
        connection.close()
    })
})
