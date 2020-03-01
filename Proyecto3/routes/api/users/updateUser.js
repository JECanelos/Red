const user = require('../../../database/models/user');

module.exports = (request, response) => {
    const id = request.params.id;
    const updatedValues = {};
    const fields = ['nombre', 'genero', 'edad', 'direccion', 'telf', 'ciudad'];

    for (let i = 0; i < fields.length; i++) {
        const eachField = fields[i];
        const field = request.body[eachField];
        if (field) {
            updatedValues[eachField] = field;
        }
    }

    user.update(id, updatedValues).then(updatedUser => {
        response.send(updatedUser);
    }).catch(error => {
        response.status(500).send(error);
    });
};