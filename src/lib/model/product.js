import mongoose from "mongoose";

const productSchema = new mongoose.Schema ({

    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})


const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;