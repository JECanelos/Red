const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:27017/testdatabase'

MongoClient.connect(url, { useNewUrlParser: true }, function(error, connection) {
    if (error) throw error
    console.log('Database created!')
    const database = connection.db()
    database.createCollection('users', function(error, collection) {
        if (error) throw error
        console.log('Collection created!')
        const user = {username: 'danny', email: 'danny@mail.com', name: 'Danny Vaca'}
        collection.insertOne(user, function(error, commandResult) {
            if (error) throw error
            console.log('User created!')
            connection.close()
        })
    })
})
