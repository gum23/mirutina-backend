import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'express-compression';

// import __dirname from './dirname.utils.js';
import config from './config.js';
import passport from 'passport';
import {initializePassport} from './config/passport.js';
import session from 'express-session';

//Import rout`s
import authRoutes from './routes/auth.routes.js';
//Create app
export const app = express();

//morgan - con dev
app.use(morgan("dev"));

//cors - Con esta configuración cualquier servior puede hacer peticiones
app.use(cors());

//express.json() para entender los json que vienen en peticiones
app.use(express.json());

//Para que entienda los campos de un formulario enviados con una peticion post
app.use(express.urlencoded({extended: false}));
app.use(compression());

//Inicializando passport
initializePassport();
app.use(passport.initialize());
app.use(session({secret: 'tuRutina', resave:false, saveUninitialized: true}))

// app.use(express.static(__dirname+"/public"));

//Use of route imported
app.use(authRoutes);

//port where the serer listens
export const PORT = config.PORT; 