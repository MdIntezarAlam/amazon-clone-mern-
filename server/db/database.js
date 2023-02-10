import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`db is connected on ${process.env.DB}`)
    } catch (error) {
        console.log("db Error ", error)
    }
}
export default connectDB