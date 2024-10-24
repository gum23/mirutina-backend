import jwt from 'jsonwebtoken';

export function auth(req, res, next) {

    const cookie = req.cookies.token;
    
    if (condition) {
        
    }

    jwt.verify(cookie, 'secret', (err, decoded) => {
        if (err) {
            res.status(401).json({ message: 'Invalid token' });
        } else {
            req.user = decoded;
            next();
        }
    });

}