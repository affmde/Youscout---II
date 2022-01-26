import React from "react";
import './playerComponent.css';
import playerDefaultPicture from '../../../media/images/profile-image-removebg-preview.png';
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import removePlayer from '../../../media/images/icons8-delete-30.png';


export const PlayerComponent = ({report, reports, setReports, getPlayerReportForRoute}) =>{

    const navigate= useNavigate();

    const birthday = (date) =>{
        const newDate = new Date(report.birthday)
        const day = newDate.getDate();
        const month = newDate.getMonth();
        const year= newDate.getFullYear();
        return `${day} - ${month} - ${year} `
    }

    const deletePlayerReport = (id) =>{
        Axios.delete(`http://localhost:3001/deletePlayerReport/${id}`).then(res=>{
            navigate('/playerReports')
                });

        setReports(reports.filter(rep=>rep._id!==id))
    }

    const handlePlayerReport = (id)=>{
        getPlayerReportForRoute(id);
        navigate('/playerReport')
    }

    return(
        <div>
            <div className="player-container">
                <div className="player-up" onClick={()=>handlePlayerReport(report._id)}>
                    <img alt="playerProfile" src={!report.pictureUrl ? playerDefaultPicture : report.pictureUrl} ></img>
                </div>
                <div className="player-down" onClick={()=>handlePlayerReport(report._id)}>
                    <h3 id="player-name">{report.fullName}</h3>
                    <p className="player-info">{report.birthday ? birthday(report.birthday) : "?"}</p>
                    <p className="player-info">{report.nationality ? report.nationality : "?"}</p>
                    <p className="player-info">{report.position ? report.position : "?"}</p>
                    <br></br>
                    <p className="player-info" id="recommend">Recommendation Level:</p>
                    <p className="player-info" id="player-recommendation">{report.recommendationLevel ? report.recommendationLevel: ""}</p>
                </div>
                <div className="player-footer">
                    <img alt="removePlayer" src={removePlayer} id="player-info-delete" onClick={()=>deletePlayerReport(report._id)}></img>
                </div>
            </div>
        </div>
        
        
    )
    
}