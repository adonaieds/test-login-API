const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.login = async (req, res) => {

    try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email });
        if (user) {
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
                res.status(200).json({resultCode: 20000, resultDescription: 'Login Success'})
              } else {
                res.status(401).json({resultCode: 40101, resultDescription: 'Access denied'})
              }
        } else {
            res.status(401).json({resultCode: 40101, resultDescription: 'Access denied'})
        }
    } catch (error) {
        res.status(500).json({
            resultCode: 50000,
            resultDescription: error.message
        })
    }
}