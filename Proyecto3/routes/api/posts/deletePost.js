const post = require('../../../database/models/post');

module.exports = (request, response) => {
    const idUser = request.params.id;
    const idPost = request.params.idpost;

    post.delete(idUser, idPost).then(post => {
        response.send(post);
    }).catch(error => {
        response.status(500).send(error);
    });
}