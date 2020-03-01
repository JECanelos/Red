const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const user = require('../../database/models/user');
const jwt = require('../../libraries/jwt');

const router = express.Router();

router.all('*/:id/*', (request, response, next) => {
    if (request.url === '/users/login') return next();

    const data = jwt.decode(request.params.id);
    if (!data) return response.status(401).send();
    response.locals = { _id: data.id };

    next();
});

const storage = multer.diskStorage({
    destination: './storage/posts',
    filename(request, filename, callback) {
        const extention = path.extname(filename.originalname);
        callback(null, `${Date.now()}${extention}`);
    }
});
const KB = 1024;
const MB = 1024 * KB;
const uploadMiddleware = multer({
    storage,
    limits: {
        fileSize: 5 * MB
    }
}).single('image');

router.get('/profile/:name', (request, response) => {
    const name = request.params.name;
    fs.readFile(`./storage/posts/${name}`, (error, content) => {
        if (error) return response.status(500).send(error.stack);
        const extention = path.extname(name).replace('.', '');
        response.writeHead(200, { 'Content-type': `image/${extention}` });
        response.end(content, 'binary');
    })
});

router.post('/users/login', (request, response) => {
    const email = request.body.email;
    const password = request.body.password;

    user.login(email, password).then(user => {
        if (user) return response.send({ token: jwt.generate(user._id) });
        response.status(422).send({ code: 123 });
    }).catch(error => {
        response.status(500).send(error.stack);
    });
});

router.get('/users', require('./users/showUsers'));
router.get('/users/:id', require('./users/showUsers'));
router.post('/users', require('./users/createUser'));
router.put('/users/:id', require('./users/updateUser'));
router.delete('/users/:id', require('./users/deleteUser'));

router.get('/users/:id/post', require('./posts/showPosts'));
// router.get('/users/:id/post/:idpost', require('./posts/showPosts'));
router.post('/users/:id/post', uploadMiddleware, require('./posts/createPost'));
router.delete('/users/:id/post/:idpost', require('./posts/deletePost'));

module.exports = router;