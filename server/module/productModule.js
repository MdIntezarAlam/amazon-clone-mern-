import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    offerheading: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    smallOffer: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    btnOffer: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    image: {
        url1_1: String,
        url1_2: String,
        url1_3: String,
        urll_4: String
    },
    bannerimg: {
        url: String
    },
    singleimg: {
        url_1: String,
        url_2: String
    }

})


const Product = new mongoose.model("Product", productSchema)

export default Product