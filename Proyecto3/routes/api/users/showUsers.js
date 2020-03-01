const user = require('../../../database/models/user');

module.exports = (request, response) => {
    const id = request.params.id;

    if (id) {
        user.findOne(id).then(user => {
            response.send(user);
        }).catch(error => {
            response.status(500).send(error);
        });
    } else {
        user.findAll().then(users => {
            response.send(users);
        }).catch(error => {
            response.status(500).send(error);
        });
    }
};