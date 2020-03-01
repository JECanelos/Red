const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:27017/testdatabase'

MongoClient.connect(url, { useNewUrlParser: true }, function(error, connection) {
    if (error) throw error
    console.log('Database created!')
    const database = connection.db()
    database.createCollection('players', function(error, collection) {
        if (error) throw error
        console.log('Collection created!')
        const players = [
            {name: 'Lionel Messi', country:'Argentina', age: 31 },
            {name: 'Cristiano Ronaldo', country:'Portugal', age: 33 },
            {name: 'Neymar Jr', country:'Brazil', age: 26 },
            {name: 'Kilyan Mbappe', country:'Francia', age: 19 },
            {name: 'Harry Kane', country:'Inglaterra', age: 26 },
            {name: 'N\'Golo Kante', country:'Francia', age: 27 },
            {name: 'Edison Cavani', country:'Urugay', age: 32 },
            {name: 'Luis Suarez', country:'Uruguay', age: 31 },
            {name: 'Paolo Dyabala', country:'Argentina', age: 24 },
            {name: 'Antonie Griezmann', country:'Francia', age: 27 },
            {name: 'Mohamed Salah', country:'Egipto', age: 26 },
            {name: 'Eden Hazard', country:'Belgica', age: 29 },
            {name: 'Luka Modric', country:'Croacia', age: 31 },
        ]
        collection.insertMany(players, function(error, commandResult) {
            if (error) throw error
            console.log('Players created!')
            connection.close()
        })
    })
})
