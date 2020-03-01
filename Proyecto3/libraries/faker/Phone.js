const Base = require('./Base')

module.exports = {
    _cellphones: [
        '+34 9## ## ####',
        '+34 9## ######',
        '+34 9########',
        '+34 9##-##-####',
        '+34 9##-######',
        '9## ## ####',
        '9## ######',
        '9########',
        '9##-##-####',
        '9##-######',
        '+34 6## ## ####',
        '+34 6## ######',
        '+34 6########',
        '+34 6##-##-####',
        '+34 6##-######',
        '6## ## ####',
        '6## ######',
        '6########',
        '6##-##-####',
        '6##-######'
    ],
    areaCode() {
        const randomDigit = Base.randomDigit()
        return  String(Base.numberBetween(2, 9)) + String(randomDigit) + String(Base.randomDigitNot(randomDigit))
    },
    exchangeCode() {
        const random_digit = Base.randomDigit()
        let digits = String(Base.numberBetween(2, 9) + random_digit)
        if(random_digit == 1) {
            digits = digits + String(Base.randomDigitNot(1))
        } else {
            digits = digits + String(Base.randomDigit())
        }
        return digits
    },
    cellphone() {
        return Base.numerify(Base.randomElement(this._cellphones))
    },
    phoneNumber() {
        switch(Base.numberBetween(0, 7)) {
            case 0:
                return Base.numerify('+1-' + this.areaCode() + '-' + this.exchangeCode() + '-####')
            case 1:
                return Base.numerify('+1-(' + this.areaCode() + ')-' + this.exchangeCode() + '-####')
            case 2:
                return Base.numerify('+1.(' + this.areaCode() + ').' + this.exchangeCode() + '.####')
            case 3:
                return Base.numerify('+1(' + this.areaCode() + ')' + this.exchangeCode() + '####')
            case 4:
                return Base.numerify('+1-' + this.areaCode() + '-' + this.exchangeCode() + '-#### x###')
            case 5:
                return Base.numerify('+1-(' + this.areaCode() + ')-' + this.exchangeCode() + '-#### x###')
            case 6:
                return Base.numerify('+1.(' + this.areaCode() + ').' + this.exchangeCode() + '.#### x###')
            default:
                return Base.numerify('+1(' + this.areaCode() + ')' + this.exchangeCode() + '#### x###')
        }
    }
}
