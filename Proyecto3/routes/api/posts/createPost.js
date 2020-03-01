const post = require('../../../database/models/post');

module.exports = (request, response) => {
    const idUser = request.params.id;
    const newPost = {
        content: request.body.content,
        image: request.file ? request.file.filename : null,
        creation: new Date().toISOString()
    };

    post.create(idUser, newPost).then(newPost => {
        response.send(newPost);
    }).catch(error => {
        response.status(500).send(error);
    });
};