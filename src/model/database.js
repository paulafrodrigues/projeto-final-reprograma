const mongoose = require('mongoose')
const MONGO_URI = process.env.PORT

function connect () {
    mongoose.connect(MONGO_URI, 
        {useNewUrlParser: true}, 
        function (error) {
            if(error) {
               console.error('Ocorreu um erro: ', error) 
            } else {
                console.log('Conectando ao mongoDB.')
            }
        }
    )
}

module.exports = { connect }