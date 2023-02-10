import User from "../module/userModule.js"
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body
        if (!name || !email || !password || !phone) {
            res.status(101).json({
                success: false,
                message: "field required"
            })
        }

        const user = await User.findOne({ email })
        if (user) {
            return res.status(401).json({
                success: false,
                message: "Email already Exist"
            })
        }
        const finalUser = await new User({ name, email, password, phone })
        await finalUser.save()
        res.status(200).json({
            success: true,
            message: "registered",
            finalUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}



//login
export const userLogin = async (req, res) => {
    try {
        const { email, password, } = req.body
        if (!email || !password) {
            res.status(101).json({
                success: false,
                message: "field required"
            })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "user does not  Exist"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            return res.status(200).json({
                success: true,
                message: "user login",
                user
            })
        }
        res.status(404).json({
            success: false,
            message: "Invalid login details",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
