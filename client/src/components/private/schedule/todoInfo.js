import React, {useState} from "react";
import './todoInfo.css';
import closeWindow from '../../../media/images/icons8-close-window-48.png';
import { useNavigate } from "react-router-dom";
import  Axios  from "axios";

export const TodoInfo = () =>{

    const [form, setForm] = useState({
        homeTeam: "",
        awayTeam: "",
        date: "",
        time:"",
        player:"",
        location:""
    })

    const navigate = useNavigate();
    
    function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }

      const closeReport= () =>{
        navigate('/schedule')
    }

    const createTodo = (e)=>{
        e.preventDefault();
        if(!form.homeTeam || !form.awayTeam || !form.location || !form.date)return
        Axios.post("https://youscout-tryout.herokuapp.com/createToDo", {
            homeTeam: form.homeTeam,
            awayTeam: form.awayTeam,
            date: form.date,
            time: form.time,
            player: form.player,
            location: form.location
        }).then(res=>{
            console.log("added todo")
        })
        document.getElementById('schedule-form').reset();
        navigate("/schedule")
    }

      
    return(
        <div className="newTodo-container">
            <div className="report-header">
                <img alt="close window" src={closeWindow} id="close-report" onClick={()=> closeReport()}></img>
            </div>
            <h2>Create new game to observe:</h2>
            <form id="schedule-form" onSubmit={createTodo}>
                <div className="match-teams">
                    <input type="text" id="createHomeTeam"placeholder="Home team" required onChange={(e)=>updateForm({homeTeam: e.target.value})}></input>
                    <p id="vsForm">vs</p>
                    <input type="text" id="createAwayTeam" required placeholder="Away team" onChange={(e)=>updateForm({awayTeam: e.target.value})}></input>
                </div>
                <div>
                    <label>Day of Observation: <input type="date" required onChange={(e)=>updateForm({date: e.target.value})}></input></label>
                    <label>Time: <input type="time" onChange={(e)=>updateForm({time: e.target.value})}></input></label>
                </div>
                
                <label>Player to watch: <input type="text" placeholder="Target player to observe" onChange={(e)=>updateForm({player: e.target.value})}></input></label>
                <input type="text" placeholder="Location" required onChange={(e)=>updateForm({location: e.target.value})}></input>
                <div className="nr-buttons">
                    <button type="reset">Clear</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}