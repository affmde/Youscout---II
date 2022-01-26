import React, {useState} from "react";
import { Link } from "react-router-dom";
import './header.css';
import logo from '../../media/images/youScout_logo.jpg'
import {Login} from '../login/login';



export const Header = ({isLoggedIn, setIsLoggedIn}) =>{
    
    const [show, setShow] = useState(false);
    const [signUp, setSignUp] = useState(false);


    return (
        <div className="header-container">
            <div className="header">
                <img alt="logo" src={logo}></img>
                <div className="information">
                    <h3><Link to="/home" className="Link">Home</Link></h3>
                    <h3><Link to="/about" className="Link">About</Link></h3>
                    <h3><Link to="/contacts" className="Link">Contacts</Link></h3> 
                    <h3 onClick={()=> !signUp ? setSignUp(true) : setSignUp(false)} ><Link to="/signup" className="Link">Sign Up</Link></h3>
                    <h3 id="login" onClick={()=> !show ? setShow(true) : setShow(false)}>Log In</h3>
                </div> 
            </div>
            <Login show={show} setShow={setShow} signup={signUp} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            
        </div>
    )
}