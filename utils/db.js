const mongodb = require('./db-mongo')

exports.startup = async () => {
    try {
        await mongodb.initMongodb()
    } catch (error) {
        console.error(err);
    }
}