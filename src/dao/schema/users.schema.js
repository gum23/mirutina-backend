import mongoose , { Schema, model } from 'mongoose';


const usersSchema = new Schema ({
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
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "instructors"
    },
    rutina: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rutinas"
    }
},{
    versionKey: false,
    timestamps: true
});

export default model('users', usersSchema);