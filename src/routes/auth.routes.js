import { Router } from "express";
import passport from 'passport';
const router = Router();

router.post("/register", passport.authenticate('register', {failureRedirect: '/failedRegister'}), (req, res) => {
    res.status(200).json({message: "Se ha registrado correctamente"})
});

router.get("/failedRegister", (req, res) => {
    res.send("No se pudo hacer su registro");
});

export default router;