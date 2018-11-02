
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    ean: String,
    comercialName: String,
    principeActive:   String,
    laboratory: String,
    price: Number

});

export default  mongoose.model('Product', ProductSchema);