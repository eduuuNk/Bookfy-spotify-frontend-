import React, {useState} from "react";
import "./loginform.css";

const LoginForm = () => {
    
    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    } 
    
    return (
        <div className="page">

            <div className="cover">
                <h1>Already have an account?</h1>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button className="login-btn" onClick={popup}>Login</button>
            
                <p className="text"> Or login using:</p>
                <div className="alt-login">
                    <div className="facebook"></div>
                    <div className="google"></div>
                </div>
            
            </div>
            
        </div>
    )

}

export default LoginForm;