global.dbDriver = require('./index');
const user = require('./models/user');
const post = require('./models/post');

const arrays = require('../libraries/array');
const faker = require('../libraries/faker');

const usersNumber = faker.Base.numberBetween(100, 1000);
arrays.range(usersNumber).map(item => {
    const name = faker.Person.firstName();
    user.create({
        name,
        username: '@' + name,
        email: name + '@mail.com',
        password: name,
        phone: faker.Phone.cellphone(),
        city: faker.Address.city(),
        posts : []
    }).catch(error => {
        console.log(error);
    });
});