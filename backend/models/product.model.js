//import mongoose
import mongoose from "mongoose";


//define the product schema(model)
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    des: {
        type: String,
        required: true,
    },
    imge: {
        type: String,
        required: true,
    }
}, {
    timestamps: true //this will add createdAt and updatedAt fields
})


//create the model using this schema
const Product = mongoose.model("Product",productSchema);

//export the model
export default Product;