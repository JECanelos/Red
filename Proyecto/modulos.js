function saludar(nombre, ciudad) {
    console.log('Hola', nombre, 'desde', ciudad);
}

function despedir(nombre, ciudad) {
    console.log('Adios', nombre, 'desde', ciudad);
}

module.exports.saludar = saludar;