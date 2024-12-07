import mongoose, { mongo } from "mongoose";

const productScema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    Image : {
        type : String,
        required : true
    },
},{timestamps: true // createdAt,updatedAt

})

const  Product = mongoose.model("Product",productScema);
// products...in mongo
export default Product