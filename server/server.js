import express from 'express'
import dotenv from 'dotenv'
import userRouter from './router/userRouters.js'
import productRouter from './router/productRouter.js'
import cookieParser from 'cookie-parser'
import connectDB from './db/database.js'
import cors from 'cors'
const app = express()


app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use("/api", userRouter)
app.use("/api", productRouter)

dotenv.config({
    path: "config/.env"
})




app.listen(process.env.PORT, () => {
    console.log(`server is liadtinig on localhost ${process.env.PORT}`)
})
connectDB()