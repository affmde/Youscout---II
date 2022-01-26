import Axios  from "axios";
import React, {useState} from "react";
import './login.css';




export const Login = ({show, setShow, setIsLoggedIn}) =>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    if(show===false){
        return null;
    }

    const login = (e)=>{
        e.preventDefault();
        let cancel = false;

        Axios.post("https://youscout-tryout.herokuapp.com//login", {
            username,
            password
        }).then(res=>{
            if(cancel)return
            console.log(res)
            if(res.data.user){
                setIsLoggedIn(true);
                setShow(false);
            }else{
                document.getElementById('no-login').style.display= "block"
                document.getElementById('login-content').style.height= "280px";
            }
            
        })
        return()=>cancel=true;
    }
    

    return(
        <div className="modal-container">
            <div className="modal-head">
                    <p>Login</p>
                </div>
                <div className="modal-content" id="login-content">
                <p id="no-login">Username or Password wrong</p>
                    <form onSubmit={login}>
                        <label for="username" className="label">Username:</label>
                        <input type="text" placeholder="username" required name="username" className="loginInput" id="username" onChange={(e)=>setUsername(e.target.value)}></input><br /> 
                        <label for="password" className="label">Password:</label>
                        <input type="password" placeholder="password" required name="password" className="loginInput" id="password" onChange={(e)=>setPassword(e.target.value)}></input>
                        <button id="loginBtn"type="submit">Login</button>
                    </form>
                </div>               
            <div className="modal-footer">
                <span onClick={()=> setShow(false)}>Close</span> <br/>
                <span>Forgot your password?</span>
            </div>
        </div>
    )
}