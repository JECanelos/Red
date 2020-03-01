const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:27017/testdatabase'

MongoClient.connect(url, { useNewUrlParser: true }, function(error, connection) {
    if (error) throw error
    const database = connection.db()
    const conditions = {}
    const newValues = {$unset:{country: 1}}
    database.collection('players').updateMany(conditions, newValues, function(error, commandResult) {
        if (error) throw error
        database.collection('players').find({}).toArray(function(error, players) {
            if (error) throw error
            console.log(players)
            connection.close()
        })
    })
})
