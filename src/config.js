import dotenv from 'dotenv'
dotenv.config();

export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_APPNAME: process.env.MONGO_APPNAME,
    MONGO_CLUSTER: process.env.MONGO_CLUSTER,
    PORT: process.env.PORT,

    //Secreto jsonwebtoken
    JWT_SECRET: process.env.JWT_SECRET,

    //Datos de estrategia de google-passport
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL
}