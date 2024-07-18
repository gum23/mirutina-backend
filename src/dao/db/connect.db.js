import mongoose from 'mongoose';
import config from '../../config.js';

(async () => {
    try {
        const db = await mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_CLUSTER}/${config.MONGO_DATABASE}?retryWrites=true&w=majority&appName=${config.MONGO_APPNAME}`);
        console.log("Database is connected to: ", db.connection.name);
        
    } catch (error) {
        console.error("The connection to database is broken ", error);
    }
})()