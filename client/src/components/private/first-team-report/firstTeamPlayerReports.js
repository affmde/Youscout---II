import React, {useState, useEffect} from 'react';
import './firstTeamPlayerReports.css';
import Axios from 'axios';
import { PlayerComponent } from '../playerComponent/playerComponent';
import addReport from '../../../media/images/icons8-add-100.png';
import { useNavigate } from 'react-router-dom';



export const FirstTeamPlayerReports = ({getPlayerReportForRoute})=>{

    const navigate = useNavigate();
    const [reports, setReports] = useState([]);
    
    useEffect(()=>{
        let cancel = false;
            Axios.get("/getPlayerReport").then(res =>{
                if (cancel) return;
                setReports(res.data)
            })
            return () => { 
                cancel = true;
              }
    }, [])

    return (
        <div className='reports-container'>
            {reports.map(report=> <PlayerComponent report={report} reports={reports} setReports={setReports} key={report._id} getPlayerReportForRoute={getPlayerReportForRoute} className="player-profile"/>)};
            <img alt="add report" src={addReport} id="add-report" onClick={()=>navigate('/newReport')}></img>
        </div>
        
    )
}