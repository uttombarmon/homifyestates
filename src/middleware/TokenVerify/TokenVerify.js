const jwt = require('jsonwebtoken');
async function tokenVerify(req, res, next) {
    const token = req?.cookies?.token
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized access' })
    }
    jwt.verify(token,process.env.TOKEN_SECRET,(error, decoded) => {
        if (error) {
            return res.status(403).send({ message: 'Unauthorized access' })
        }
        else{
            req.user = decoded.email;
            next();
        }
    })
}


module.exports = tokenVerify;