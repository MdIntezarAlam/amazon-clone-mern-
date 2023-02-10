import express from 'express'
import { getAllProduct, postAllProduct } from '../controller/productController.js'


const router = express.Router()

router
    .route("/postproduct")
    .post(postAllProduct)
router
    .route("/getproduct")
    .get(getAllProduct)

export default router