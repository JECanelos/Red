const user = require('../../../database/models/user');

module.exports = (request, response) => {
    const newUser = {};
    const fields = [
        { 'name': 'nombre', required: true },
        { 'name': 'genero', required: true },
        { 'name': 'edad', required: true },
        { 'name': 'direccion', required: false },
        { 'name': 'telf', required: false },
        { 'name': 'ciudad', required: false }
    ];

    const fieldsLength = fields.length;
    let missingFields = '';
    for (let i = 0; i < fieldsLength; i++) {
        const eachFieldName = fields[i]['name'];
        const eachFieldRequired = fields[i]['required'];
        const field = request.body[eachFieldName];
        if (field) {
            newUser[eachFieldName] = field;
        } else if (eachFieldRequired) {
            missingFields += eachFieldName + ', ';
        }
    }

    if (missingFields.length > 0) {
        return response.status(422).send({ 'Error': 'Missing field(s) ' +  missingFields.substring(0, missingFields.length - 2)});
    }

    user.create(newUser).then(newUser => {
        response.send(newUser);
    }).catch(error => {
        response.status(500).send(error);
    });
};