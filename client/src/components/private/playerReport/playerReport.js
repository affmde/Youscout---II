import React from "react";
import './playerReport.css';
import playerDefaultPicture from '../../../media/images/profile-image-removebg-preview.png';
import { useNavigate } from "react-router-dom";
import closeWindow from '../../../media/images/icons8-close-window-48.png';


export const PlayerReport = ({report}) =>{

    const navigate = useNavigate();

    const closeReport= () =>{
        navigate('/playerReports')
    }

    return(
    <div className="player-report-container">
        
        <div className="report-header">
            <img alt="close window" src={closeWindow} id="close-report" onClick={()=> closeReport()}></img>
        </div>
        <p id="report-name">{report.fullName}</p>
            <h2>General information:</h2>
            <div className="raw raw-1">
                <div className="raw-1-left nr-box">
                    <img alt="playerPic" src={!report.pictureUrl ? playerDefaultPicture : report.pictureUrl}></img>
                    <label>Club: <p>{report.club}</p></label>
                </div>
                <div className="raw-1-right nr-box">
                    <h3>Personal information:</h3>
                    <label>Birthday: <p>{report.birthday} </p></label>
                    <label>Gender: <p>{report.gender} </p></label>
                    <label>Email: <p>{report.email} </p></label>
                    <label>Phone number:<p>{report.phone} </p></label>
                    <label>Nationality: <p>{report.nationality} </p></label>
                </div>
            </div>

            <div className="raw raw-2">
                <div className="raw-2-left nr-box">
                    <h3>Match details: </h3>
                    <label>Date: <p>{report.matchDate} </p></label>
                    <label>Opponent: <p>{report.opponent} </p></label>
                    <label>Competition: <p>{report.competition} </p></label>
                </div>
                <div className="raw-2-right nr-box">
                    <h3>Player details: </h3>
                    <label>Height:<p>{report.height} </p><span className="pl-details">cm</span></label>
                    <label>Weight:<p>{report.weight} </p><span className="pl-details">Kg</span></label>
                    <label>Favorite foot: <p>{report.favoriteFoot} </p></label>
                    <label>Position: <p>{report.position} </p></label>
                </div>
            </div>

            <h2>Player analysis</h2>
            <div className="raw raw-3">
                <div className="raw-3-left nr-box">  
                    <label>Offensive Process: <p>{report.offensiveProcess} </p></label>
                </div>
                <div className="raw-3-right nr-box">
                    
                    <label>Defensive Process:<p>{report.defensiveProcess} </p></label>
                </div>
            </div>
            <div className="raw raw-4">
                <div className="raw-4-left nr-box">
                    <label>Offensive transition: <p>{report.offensiveTransition} </p></label>
                </div>
                <div className="raw-4-right nr-box">
                    <label>Defensive Transition: <p>{report.defensiveTransition} </p></label>
                </div>
            </div>
            <div className="raw raw-5">
                <div className="raw-5-left nr-box">
                    <label>Psychological<p>{report.psychological} </p></label>
                </div>
                <div className="raw-5-right nr-box">
                    <label>Physical<p>{report.physical} </p></label>
                </div>
            </div>

            <div className="raw-6">
                <div className="central">
                    <label>Strengths and Weaknesses:<p>{report.strenghtsAndWeaknesses} </p></label>
                </div>
                <div>
                    <label>Level of recomendaion:<p id="report-rec">{report.recommendationLevel} </p></label>
                </div>
            </div>
    </div>

    )}