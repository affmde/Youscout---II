import React from "react";
import { useNavigate } from "react-router-dom";
import phoneImage from '../../media/images/body_background_image.png';
import './homepageBody.css';

export const HomepageBody = () =>{

    const navigate = useNavigate()

    return (
        <div className="homepage-body">
            <div className="body-info">
                <div className="body-info-text-edit">
                    <p id="first-p">Made from scouts to scouts.</p>
                    <h1>YouScout</h1>
                    <p>The YouScout app was created thinking on scouts from all football levels. Are you a full professional scout working
                        to one of the top clubs in the world? Or are you working in the more modest context and with not so much resources available?
                        Or even are you just someone curious about the world of Scouting? With this free app whoever you are you can start immediatly 
                        creating and managing your reports about all footbal players you watch.
                    </p>
                </div>
                
            </div>
            <div className="image-container">
                <img alt="page" src={phoneImage} id="phone-image"></img>
                <h5 id="start-now" onClick={()=>navigate('/signup')}>Start Now</h5>
            </div>
            
        </div>
    )
}