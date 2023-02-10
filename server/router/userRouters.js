import express from 'express'
import { register, userLogin } from '../controller/user.js'

const router = express.Router()

router
    .route("/register")
    .post(register)
router
    .route("/login")
    .post(userLogin)

export default router