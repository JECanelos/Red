const post = require('../../../database/models/post');

module.exports = (request, response) => {
    const idUser = response.locals._id;
    const idPost = request.params.idpost;
    const pagina = ((request.query.pagina) ? parseInt(request.query.pagina) : 0);
    const cantidad = ((request.query.cantidad) ? parseInt(request.query.cantidad) : 5);

    if (idPost) {
        post.findOne(idUser, idPost).then(post => {
            response.send(post);
        }).catch(error => {
            response.status(500).send(error);
        });
    } else {
        post.findAll(idUser, pagina, cantidad).then(posts => {
            response.send(posts);
        }).catch(error => {
            response.status(500).send(error);
        });
    }
};