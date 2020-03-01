module.exports = {
    range (quantity) {
        return Array.apply(null, Array(quantity)).map((x, i) => i)
    },
    chunk (array, quantity) {
        return this.range(Math.ceil(array.length / quantity)).map((x, i) => array.slice(i * quantity, i * quantity + quantity))
    },
    merge (array) {
        return [].concat.apply([], array)
    }    
}