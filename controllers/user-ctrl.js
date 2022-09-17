const User = require('../models/User')

exports.getUser = async (req, res) => {
    try {
        const result = await User.find({})
        res.status(200).json({resultCode: 20000, resultDescription: 'Success', resultData: result})
    } catch (error) {
        res.status(500).json({
            resultCode: 50000,
            resultDescription: error.message
        })
    }
}