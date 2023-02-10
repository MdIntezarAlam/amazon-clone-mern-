import React, { useState } from 'react'
import '../Account/sign.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const initialValue = {
    name: "",
    email: "",
    password: "",
    phone: ""
}

const Signup = () => {

    const [signupValue, setSignupValue] = useState(initialValue)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setSignupValue(() => {
            return {
                ...signupValue, [name]: value
            }
        })
    }

    const signupUser = async (e) => {
        e.preventDefault()
        const { name, email, password, phone } = signupValue
        if (name === "") {
            return toast.warning("Name is required")
        } else if (email == "") {
            return toast.warning("email is required")
        } else if (!email.includes("@")) {
            return toast.error("email is not valid")
        } else if (password == "") {
            return toast.error("password required")
        } else if (password.length <= 5) {
            return toast.error("password length should not be less than  6 char")
        } else if (password.length > 8) {
            return toast.error("password length should not be greater than 8 char")
        } else if (phone.length <= 9) {
            return toast.error("phone length should not be less than  6 char")
        } else if (phone.length > 11) {
            return toast.error("phone length should not be greater than 10 char")
        }
        else {
            const res = await axios.post("/api/register", signupValue)
            if (res.status === 200) {
                setSignupValue(res)
                toast.success("user signup")
                setTimeout(() => {
                    navigate("/login")
                }, 5000)
            }
        }
    }
    return (
        <div className='sig'>

            <div className='s_box'>
                <span>Sign In</span>
                <label>Enter Name </label>
                <input type="text"
                    name='name'
                    value={signupValue.name}
                    onChange={handleChange}
                />
                <label>Enter Email </label>
                <input type="text"
                    name='email'
                    value={signupValue.email}
                    onChange={handleChange}
                />
                <label>Enter  Password</label>
                <input type="password"
                    name='password'
                    value={signupValue.password}
                    onChange={handleChange}
                />
                <label>Enter  Phone</label>
                <input type="number"
                    name='phone'
                    value={signupValue.phone}
                    onChange={handleChange}
                />
                <div className='link_container'>
                    <button onClick={signupUser}>continue</button>
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

export default Signup