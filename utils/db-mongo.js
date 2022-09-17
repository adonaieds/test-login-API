const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/test-api'

exports.initMongodb = async () => {
    try {
        mongoose.connect(uri, {
            useNewUrlParser: true
          });
    } catch (error) {
        throw error
    }
}