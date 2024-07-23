import mongoose , { Schema, model } from 'mongoose';


const clientSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
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
    mail: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    rutina: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rutinas"
    }
},{
    versionKey: false,
    timestamps: true
});

export default model('clients', clientSchema);