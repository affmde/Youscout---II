import React from "react";
import './privHeader.css';
import logo from '../../../../media/images/youScout_logo-removebg-preview.png';
import profile from '../../../../media/images/icons8-male-user-50.png';



export const PrivHeader = ({setIsLoggedIn}) =>{


    const logOut = () =>{
        setIsLoggedIn(false);
    }

    return(
        <div className="privateHomepage-container">
            <div className="priv-header">
                <img alt="logo" src={logo}></img>
                <h2>Welcome</h2>
                <div className="header-right">
                    <img alt="profile" src={profile}></img>
                    <p onClick={()=>logOut()} id="app-logout">Log out</p>
                </div>
            </div>
        </div>
    )
}