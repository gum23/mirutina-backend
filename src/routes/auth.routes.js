import { Router } from "express";
import passport from 'passport';
import jwt from 'jsonwebtoken';
import config from '../config.js';
const router = Router();

router.post("/register", passport.authenticate('register', {failureRedirect: '/failedRegister'}), (req, res) => {
    res.status(200).json({message: "Se ha registrado correctamente"})
});

router.get("/failedRegister", (req, res) => {
    res.send("No se pudo hacer su registro");
});

router.post("/login", (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
        
        if(err) return res.status(500).redirect("/failedLogin");

        if(!user) return res.status(401).redirect("/failedLogin");

        req.logIn(user, (err) => {
            if(err) return res.status(500).redirect("/failedLogin");

            const userData = {
                id: user._id,
                name: user.name,
                lastName: user.lastName,
                role: user.role
            }

            const token = jwt.sign(userData, `${config.JWT_SECRET}`, { expiresIn: "1h" });

            if (userData.role === "instructor") {
                req.session.instructor = userData;
            } else {
                req.session.users = userData;
            }
            
            res.cookie('miRutinaCookie', token, ).send({data: userData});
        })

    })(req, res, next);
});

router.get("/failedLogin", (req, res) => {
    res.send("Error al querer ingresar");
})

export default router;