const user = require('../../../database/models/user');

module.exports = (request, response) => {
    const id = request.params.id;

    user.delete(id).then(deletedUser => {
        response.send(deletedUser);
    }).catch(error => {
        response.status(500).send(error);
    });
};