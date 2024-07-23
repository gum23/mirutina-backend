import { Schema, model } from 'mongoose';

const activitySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    series: {
        type: Number,
        required: true,
        trim: true
    },
    repetitiones: {
        type: Number,
        required: false,
        default: 0

    },
    carga: {
        peso: {
            type: Number,
            required: false,
            trim: true
        },
        timepo: {
            type: Number,
            required: false,
            trim: true
        }
    }
}, {
    versionKey: false,
    timestamps: true
})

const rutinaBodySchema = new Schema({
    calentamiento: [activitySchema],
    abdominales: [activitySchema],
    ejercicios: [activitySchema],
    cardio: [activitySchema]
}, {
    versionKey: false,
    timestamps: true
})

const rutinaSchema = new Schema ({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: rutinaBodySchema,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('rutinas', rutinaSchema);