module.exports = {
    characters: 'qwertyuiopasdfghjklzxcvbnm',
    numberBetween(min = 0, max = 9) {
        return Math.floor(min + Math.random() * (max - min + 1))
    },
    randomDigit() {
        return this.numberBetween(0, 9)
    },
    randomElement(array) {
        return array[this.numberBetween(0, array.length - 1)]
    },
    randomElements(array, quantity) {
        const subArray = []
        while(subArray.length < quantity) {
            const randomElement = this.randomElement(array)
            array = array.filter(element => {
                return randomElement != element
            })
            subArray.push(randomElement)
        }
        return subArray
    },
    randomDigitNot(number) {
        if(number == 9) {
            return this.numberBetween(0, 8)
        } else if(number == 0) {
            return this.numberBetween(1, 9)
        } else {
            const lower = this.numberBetween(0, number - 1)
            const upper = this.numberBetween(number + 1, 9)
            return this.randomElement([lower, upper])
        }
    },
    randomDigitNotNull() {
        return this.numberBetween(1, 9)
    },
    randomNumber(digits = null) {
        digits = digits ? digits : this.randomDigitNotNull()
        let number = ''
        for(let index = 0; index < digits; index ++) {
            number += index == 0? this.randomDigitNotNull(): this.randomDigit()
        }
        return parseInt(number)
    },
    randomFloat(decimals = null, min = null, max = null) {
        decimals = decimals ? decimals : this.randomDigitNotNull()
        min = min ? min : 0
        max = max ? max : 0
        const integer = this.numberBetween(min, max)
        const decimal = this.randomNumber(decimals)
        return parseFloat(integer + '.' + decimal)
    }, randomLetter() {
        return this.randomElement(this.characters)
    },
    shuffle(array) {
        for (let index = array.length - 1; index >= 0; index --) {
            const randomIndex = Math.floor(Math.random() * (index + 1))
            const itemAtIndex = array[randomIndex]
            array[randomIndex] = array[index]
            array[index] = itemAtIndex;
        }
        return array;
    },
    numerify(text) {
        let numerified = ''
        for(let index = 0; index < text.length; index ++) {
            numerified += text[index] == '#'? this.randomDigit(): text[index]
        }
        return numerified
    },
    lexify(text) {
        let lexified = ''
        for(let index = 0; index < text.length; index ++) {
            lexified += text[index] == '?'? this.randomLetter(): text[index]
        }
        return lexified
    },
    bothify(text) {
        return this.lexify(this.numerify(text))
    },
    asciify(text) {
        let asciified = ''
        for(let index = 0; index < text.length; index ++) {
            asciified += text[index] == '*'? String.fromCharCode(this.numberBetween(0, 255)): text[index]
        }
        return asciified
    }
}
