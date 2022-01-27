import React from "react";
import './about.css';
import andreMiranda from '../../media/images/andreMiranda.png';
import {Footer} from './footer'

export const About = () =>{
    return (
        <div className="about-container">
            <h3 id="team">The YouScout Project</h3>
            <div className="about-personal">
                <div className="left">
                    <img alt="andre miranda"src={andreMiranda}></img>
                </div>
                <div className="right">
                    <div className="text-edit">
                        <p>This project was implemented on as the final project of Codecademy Front-End Engeneer Career Path course</p>
                        <p>As a former professional football coach, who is trying a change in his career, but still loving the football game,
                            i found really interesting to try out this football scouting project.
                        </p>
                        <p>In this app you will be able to:</p>
                        <ul>
                            <li>Create Player Report</li>
                            <li>Visualize player reports</li>
                            <li>Remove player Reports</li>
                            <li>Schedule tasks</li>
                            <li>Edit tasks</li>
                            <li>Remove tasks</li>
                        </ul>
                        <p>Surely there is still a lot to improve on this website, so feel free to use the message field in the contacts page to give your opinion
                            and leave comments and improvments about the app.</p>
                    </div>    
                </div>
            </div>
            <Footer />
        </div>
    )
}