import { Schema, model } from 'mongoose';

const rutinaSchema = new Schema ({
    idClient: {
        type: String,
        trim: true
    },
    client: {
        type: Object,
        name: {
            type: String
        },
        lastName: {
            type: String
        }
    },
    gimnasio:{
        type: Object,
        name: {
            type: String
        }
    },
    personal: {
        type: Object,
        name: {
            type: String
        },
        lastName: {
            type: String
        }
    },
    rutina: {
        type: Object,
        required: true,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('rutinas', rutinaSchema);