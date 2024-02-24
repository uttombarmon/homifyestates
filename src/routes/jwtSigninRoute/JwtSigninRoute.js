const express = require('express');
const jwt = require('jsonwebtoken');
const jwtRouter = express.Router();
const cookieParser = require('cookie-parser')

jwtRouter.post('/signIn', async (req, res) => {
    try {
        const token = jwt.sign(
            {
                email: req.body.email
            },
            process.env.TOKEN_SECRET,
            { expiresIn: '1h' })
            res
            .cookie('homify_token', token, {
                httpOnly: true,
                secure: true,
                sameSite:'none'
                // secure: process.env.NODE_ENV === 'production',
                // sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            })
            .send({ success: true })
    } catch (error) {
        res.send(error.message)
    }
});
jwtRouter.post('/clear-token', async (req, res) => {
    try {
        res.clearCookie('homify_token', {
            maxAge: 0, secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict'
        }).send({ success: true })
    } catch (error) {
        res.send(error.message).status(403)
    }
});

module.exports = jwtRouter;