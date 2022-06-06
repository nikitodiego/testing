import mongoose from "mongoose";

const carritoSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    productos: {
        type: Array,
        required: true
    }
})

export default mongoose.model('carritos', carritoSchema);