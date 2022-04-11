const mongoose = require('mongoose')

const conexao = async() => {

var atlas = await mongoose.connect('mongodb+srv://TutuMbs:fox1590051018@cluster0.mx6rm.mongodb.net/at1tri')
}

module.exports = conexao