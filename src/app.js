import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config.js';

//Import rout`s
import gimnasioRoutes from './routes/gimnasio.routes.js';
import personalRoutes from './routes/personal.routes.js';
import clientsRoutes from './routes/clients.routes.js'

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

//Use of route imported
app.use(gimnasioRoutes);
app.use(personalRoutes);
app.use(clientsRoutes);

//port where the serer listens
export const PORT = config.PORT; 