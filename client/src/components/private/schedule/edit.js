import React from "react";
import './edit.css';
import { useNavigate } from "react-router-dom";
import closeWindow from '../../../media/images/icons8-close-window-48.png';
import Axios from 'axios';



export const Edit = ({info, setInfo, showEdit,setShowEdit})=>{

    const navigate= useNavigate();
    
    function updateForm(value) {
        return setInfo((prev) => {
          return { ...prev, ...value };
        });
      }

    const closeReport= () =>{
        setShowEdit(false);
        navigate('/schedule');
    }


    const confirmEdit = (e, id)=>{
        e.preventDefault()
        Axios.patch(`https://youscout-tryout.herokuapp.com/updateToDo/${id}`, {
            homeTeam: info.homeTeam,
            awayTeam: info.awayTeam,
            date: info.date,
            time: info.time,
            player:info.player,
            location: info.location
        }).then(response=>{
            console.log(response)
            setShowEdit(false)
            setInfo({
                homeTeam: "",
                awayTeam: "",
                date: "",
                time: "",
                player:"",
                location: ""
            })
        })
        
    }


    if(!showEdit){
        return null;
    }

    return( 
        <div className="editTd-container" id="editContainer">
            <div className="report-header">
                <img alt="close window" src={closeWindow} id="close-report" onClick={()=> closeReport()}></img>
            </div>
            <h2>Edit your Report:</h2>
            <form id="schedule-form">
                <div className="match-teams">
                    <input type="text" id="homeTeamEdit" value={info.homeTeam} onChange={(e)=>updateForm({homeTeam: e.target.value})}></input>
                    <p id="vsForm">vs</p>
                    <input type="text" id="awayTeamEdit" value={info.awayTeam} onChange={(e)=>updateForm({awayTeam: e.target.value})}></input>
                </div>
                <div>
                    <label>Day of Observation: <input type="date" value={info.date} onChange={(e)=>updateForm({date: e.target.value})} id="editDate"></input></label>
                    <label>Time: <input type="time" value={info.time} onChange={(e)=>updateForm({time: e.target.value})} id="editTime"></input></label>
                </div>
                
                <label>Player to watch: <input type="text" value={info.player} onChange={(e)=>updateForm({player: e.target.value})}></input></label>
                <input type="text" value={info.location} onChange={(e)=>updateForm({location: e.target.value})}></input>
                <div className="nr-buttons">
                    <button type="reset">Clear</button>
                    <button onClick={(e)=>confirmEdit(e, info._id)}>Save changes</button>
                </div>
            </form>
        </div>
    )
    
}