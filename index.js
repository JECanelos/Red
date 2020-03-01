//const faker = require("libraries/faker/index.js");
const faker = require("./libraries/faker");

const mongoDb = require("mongodb");
const mongoClient = mongoDb.MongoClient;
const driver = "mongodb";
const host = "localhost";
const port = "27017";
const url = `${driver}://${host}:${port}`;
const options = {useNewUrlParser: true};

function callback(error, connection) {
    if (error) throw error;
    const database = connection.db("myApp");
    console.log("Conectado a", database);
    const users = database.collection("users");
    const options = {
        "edad":{
            $gt: 18,
            $lt: 20
        }
    };
    const fields = {
        projection: {
            "direccion": 0,
            "telf": 0
        }
    };
    const order = {
        "edad": 1
    };
    users.find(options, fields).sort(order).toArray((error, users) => {
        if (error) throw error;
        console.log(users);
    });
}

// function callback(error, connection) {
//     if (error) throw error;
//     const database = connection.db("myApp");
//     console.log("Conectado a", database);
//     const users = database.collection("users")
//     users.drop();

//     console.log("Ingresando datos...");
//     for (let i = 0; i < 1000; i++) {
//         let genero = faker.Base.randomElement(["male", "female"]);
//         users.insertOne({
//             nombre:faker.Person.name(genero),
//             genero,
//             "edad":faker.Base.numberBetween(18, 60),
//             "direccion":faker.Address.address(),
//             "telf":faker.Phone.phoneNumber(),
//             "ciudad":faker.Address.city()
//         });
//         console.log(String(i + 1), "/", "1000");
//     }
//     console.log("Datos ingresados");
// }

console.log("Conectando...");
mongoClient.connect(url, options, callback);