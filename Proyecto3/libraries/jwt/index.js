const path = require('path')
const fs = require('fs')
const jwt = require('jsonwebtoken')

const privateKey = fs.readFileSync(path.join(__dirname, 'private.key'), 'utf8')
const publicKey = fs.readFileSync(path.join(__dirname, 'public.key'), 'utf8')

const generateOptions = {expiresIn: '12h', algorithm:  'RS256'}
const verifyOptions = {expiresIn: '12h', algorithm:  ['RS256']}

module.exports = {
    generate(id) {
        return jwt.sign({ id }, privateKey,  generateOptions)
    },
    decode(token) {
        try {
            return jwt.verify(token, publicKey, verifyOptions)
        } catch (error) {
            return null
        }
    }
}
