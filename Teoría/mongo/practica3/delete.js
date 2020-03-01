const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:27017/testdatabase'

MongoClient.connect(url, { useNewUrlParser: true }, function(error, connection) {
    if (error) throw error
    const database = connection.db()
    const conditions = {age:{$lt: 30}}
    database.collection('players').deleteMany(conditions, function(error, commandResult) {
        if (error) throw error
        database.collection('players').find({}).toArray(function(error, players) {
            if (error) throw error
            console.log(players)
            connection.close()
        })
    })
})
