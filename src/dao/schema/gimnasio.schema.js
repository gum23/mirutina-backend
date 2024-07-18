import { Schema, model } from "mongoose";

const gymSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    cuil: {
        type: Number,
        required: true,
        trim: true,
        unique: true
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
    mail: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('gimnasio', gymSchema);