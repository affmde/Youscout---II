import React, {useState} from 'react';
import './contacts.css';
import facebookIcon from '../../media/images/facebook-icon.png';
import githubIcon from '../../media/images/github-icon-2.png';
import linkedinIcon from '../../media/images/linkedin-icon.png';
import emailIcon from '../../media/images/email-icon.png';
import phoneIcon from '../../media/images/phone-icon.png';
import finlandFlag from '../../media/images/finland-icon.png';
import Axios from 'axios';

export const Contacts = ()=>{

    const [message, setMessage] = useState({
        name: "",
        email: "",
        message: ""
    })

    function updateForm(value) {
        return setMessage((prev) => {
          return { ...prev, ...value };
        });
      }

    const sendMessage = (e)=>{
        e.preventDefault()

        Axios.post("/createMessage", {
            name: message.name,
            email: message.email,
            message: message.message
        }).then(resp=>{
            console.Console.log(resp)
            setMessage({
                name: "",
                email: "",
                message: ""
            });
        })
        document.getElementById('contacts-form').reset();
    }

    return(
        <div className='contacts-container'>
            <div className='contacts-info'>
                <h2>Contacts:</h2>
                <div className='personal-contacts'>
                    <div className='contacts-flex'>
                        <img alt="email" src={emailIcon}></img>
                        <p>affmde@hotmail.com</p>
                    </div>
                    <div className='contacts-flex'>
                        <img alt="phone number" src={phoneIcon}></img>
                        <p>+358123456789</p>
                    </div>
                    <div className='based-in'>
                        <h5>Based in:</h5>
                        <div className='contacts-flex' id="basedIn">
                            <img alt="Finland" src={finlandFlag}></img>
                            <p>Finland</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Find us in:</h3><br></br>
                    <div className='contacts-social-networks'>
                        <div className='contacts-facebook'>
                            <a href="https://www.facebook.com/andre.miranda.77312"><img alt="facebook logo" src={facebookIcon}></img></a>
                        </div>
                        <div className='contacts-github'>
                            <a href="https://github.com/affmde"><img alt="github logo" src={githubIcon}></img></a>
                        </div>
                        <div className='contacts-linkedin'>
                            <a href="www.linkedin.com/in/andré-miranda-3a768556"><img alt="linkedin logo" src={linkedinIcon}></img></a>
                        </div>
                    </div>        
                </div>
            </div>
            <div className='contacts-message-container'>
                <form onSubmit={sendMessage} id="contacts-form">
                    <label for="contacts-name">Name: </label>
                    <input id="contacts-name"type="text" required name="name" onChange={(e)=>updateForm({name: e.target.value})}></input>
                    <label for="contacts-email">Email: </label>
                    <input id="contacts-email" type="email" required name="email" onChange={(e)=>updateForm({email: e.target.value})}></input>
                    <textarea placeholder='Leave your message' onChange={(e)=>updateForm({message: e.target.value})}></textarea>
                    <div className='contacts-form-btns'>
                        <button type="reset">Clear</button>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>

        </div>
    )
}