import { Schema, model } from "mongoose";

const instructorsSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    province: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    nameStreet:{
        type: String,
        required: true,
        trim: true
    },
    numberStreet: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true 
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('instructors', instructorsSchema);