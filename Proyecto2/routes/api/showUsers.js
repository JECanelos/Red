const user = require('../../database/models/user');

module.exports = (request, response) => {
    user.all().then(users => {
        response.send(users);
    }).catch(error => {
        response.status(500).send(error);
    });
};