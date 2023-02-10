import Product from "../module/productModule.js"

export const postAllProduct = async (req, res) => {
    try {
        const { offerheading, smallOffer, btnOffer, image, singleimg, bannerimg } = req.body
        if (!offerheading || !smallOffer || !btnOffer || !image || !singleimg || !bannerimg) {
            res.status(101).json({
                success: false,
                message: "All field required"
            })
        }

        const user = await Product.findOne({ smallOffer })
        if (user) {
            return res.status(401).json({
                success: false,
                message: "offer already Exist"
            })
        }
        const finalUser = await new Product({ offerheading, smallOffer, btnOffer, image, singleimg, bannerimg })
        await finalUser.save()
        res.status(200).json({
            success: true,
            message: "sended",
            finalUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}



//getAllProduct
export const getAllProduct = async (req, res) => {
    try {
        const product = await Product.find({})
        if (product) {
            res.status(200).json({
                success: true,
                message: "product get",
                product
            })
        }
        else {
            return res.status(404).json({
                success: false,
                message: "not not found",
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}