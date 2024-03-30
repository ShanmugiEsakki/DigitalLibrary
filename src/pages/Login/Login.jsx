import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaRegUserCircle } from "react-icons/fa";
import { CiLock, CiMail } from "react-icons/ci";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import './Login.css';

const Login = () => {
    const [action, setAction] = useState("Login");
    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const endpoint = action === "Login" ?
            "http://localhost:8080/api/v1/user/login" :
            "http://localhost:8080/api/v1/user/save";

        try {
            const response = await axios.post(endpoint, Object.fromEntries(formData));
            console.log(response.data);

            if (response.data.message === "Login Success" || response.data.message === "") {
                alert(response.data.message);
            } else {
                alert("Welcome to ChapterOne!");
                navigate('/book');
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred. Please check your login details!");
        }
    };

    return (
        <center>
            <div className='wrapper'>
                <form onSubmit={handleFormSubmit}>
                    <h1>{action}</h1>

                   

                    {action === "Login" ? <div></div> :
                        <div className="input-box">
                            <input type="text" name="username" placeholder="Username" required />
                            <MdOutlineDriveFileRenameOutline className='icon' />
                        </div>}

                    <div className="input-box">
                        <input type="email" name="email" placeholder="Email" required />
                        <CiMail className='icon' />
                    </div>

                    <div className="input-box">
                        <input type="password" name="password" placeholder="Password" required />
                        <CiLock className='icon' />
                    </div>

                    {action === "Sign Up" ? <div></div> :
                        <div className="remember-forgot">
                            <label>
                                <input type='checkbox' />Remember me</label>
                            <a href='#'>Forgot Password? </a>
                        </div>}

                    <button type="submit" className={action === "Login" ? "submit gray" : "submit"}>
                        {action === "Login" ? "Login" : "Sign Up"}
                    </button>

                    {action === "Sign Up" ?
                        <div className='register-link'>
                            Already have an account? <a href='#' onClick={() => setAction("Login")}>Login</a>
                        </div> :
                        <div className="register-link" >
                            <p>Don't have an account?</p> <a href='#' onClick={() => setAction("Sign Up")}>Sign Up</a>
                        </div>
                    }
                </form>
            </div>
        </center>
    );
};

export default Login;
