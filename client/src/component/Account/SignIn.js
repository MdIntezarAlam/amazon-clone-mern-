import React, { useState } from 'react'
import '../Account/sign.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const initialValue = {
    email: "",
    password: ""
}

const SignIn = () => {

    const [loginValue, setLoginValue] = useState(initialValue)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginValue(() => {
            return {
                ...loginValue, [name]: value
            }
        })
    }

    const loginUser = async (e) => {
        e.preventDefault()
        const { email, password } = loginValue
        if (email == "") {
            return toast.warning("email is required")
        } else if (!email.includes("@")) {
            toast.error("email is not valid")
        } else if (password == "") {
            toast.error("password required")
        } else if (password.length <= 5) {
            toast.error("password length should not be less than  6 char")
        } else if (password.length > 8) {
            toast.error("password length should not be greater than 8 char")
        }
        else {
            const res = await axios.post("/api/login", loginValue)
            if (res.status === 200) {
                setLoginValue(res)
                toast.success("user login")
                setTimeout(() => {
                    navigate("/pro")
                }, 5000)
            }
        }
    }
    return (
        <div className='sig'>

            <div className='s_box'>
                <span>Sign In</span>
                <label>Enter Email </label>
                <input type="text"
                    name='email'
                    value={loginValue.email}
                    onChange={handleChange}
                />
                <label>Enter  Password</label>
                <input type="password"
                    name='password'
                    value={loginValue.password}
                    onChange={handleChange}
                />
                <div className='link_container'>
                    <button onClick={loginUser}>continue</button>
                </div>
                <div className='acc'>
                    <span>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</span>
                </div>
            </div>
            <div className='btns'>
                <button>create account</button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default SignIn