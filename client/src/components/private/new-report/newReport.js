import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import './newReport.css';
import Axios from 'axios';


export const NewReport = ()=>{
    const originalReport = {
        pictureUrl:"",
        club: "",
        fullName:"",
        birthday:"",
        gender:"",
        email: "",
        phone:"",
        nationality:"",
        matchDate:"",
        opponent:"",
        competition:"",
        height:"",
        weight:"",
        favoriteFoot:"",
        position:"",
        offensiveProcess:"",
        defensiveProcess:"",
        offensiveTransition:"",
        defensiveTransition:"",
        psychological:"",
        physical:"",
        strenghtsAndWeaknesses:"",
        recommendationLevel:""
    }
    const [report, setReport] = useState(originalReport)
    const navigate=useNavigate();

    const size = [];
    for(let i=1; i<=220; i++){
        size.push(i)
    }

    const levelRecommendation = [];
    for (let index = 1; index < 6; index++) {
        levelRecommendation.push(index)
        
    }

    function updateForm(value) {
        return setReport((prev) => {
          return { ...prev, ...value };
        });
      }

    const createReport = (e) =>{
        e.preventDefault();

        Axios.post("/createPlayerReport", {
        pictureUrl: report.pictureUrl,
        club: report.club,
        fullName: report.fullName,
        birthday: report.birthday,
        gender: report.gender,
        email: report.email,
        phone: report.phone,
        nationality: report.nationality,
        matchDate: report.matchDate,
        opponent: report.opponent,
        competition: report.competition,
        height: report.height,
        weight: report.weight,
        favoriteFoot: report.favoriteFoot,
        position: report.position,
        offensiveProcess: report.offensiveProcess,
        defensiveProcess: report.defensiveProcess,
        offensiveTransition: report.offensiveTransition,
        defensiveTransition: report.defensiveTransition,
        psychological: report.psychological,
        physical: report.physical,
        strenghtsAndWeaknesses: report.strenghtsAndWeaknesses,
        recommendationLevel: report.recommendationLevel
        }).then(res => {
            console.log("player added");
        })
        setReport({originalReport});
        document.getElementById("myNewReport").reset();
        navigate('/playerReports')
    }
    

    return(
        <div className="new-report-container">
            <form id="myNewReport">
            <h2>General information:</h2>
            <div className="raw raw-1">
                <div className="raw-1-left nr-box">
                    <input type="file" name="pic-url" placeholder="picture URL" id="pic-upload" onChange={(e)=>updateForm({pictureUrl: e.target.value})}></input>
                    <label for="playerClub">Club: </label>
                    <input type="text" id="playerClub" required placeholder="Club" name="club" onChange={(e)=>updateForm({club: e.target.value})}></input>
                </div>
                <div className="raw-1-right nr-box">
                    <h3>Personal information:</h3>
                    <label>Full name: <input required type="text" name="name" placeholder="Full name" onChange={(e)=>updateForm({fullName: e.target.value})}></input></label>
                    <label>Birthday: <input required type="date" name="birthday" placeholder="birthday" onChange={(e)=>updateForm({birthday: e.target.value})}></input></label>
                    <label>Gender: <select id="gender" required onChange={(e)=>updateForm({gender: e.target.value})}>
                        <option>Male</option>
                        <option>Female</option>
                    </select></label>
                    <label>Email: <input type="email" name="email" placeholder="email" onChange={(e)=>updateForm({email: e.target.value})}></input></label>
                    <label>Phone number:<input type="tel" name="phone" placeholder="xxx-xxxx-xxxx" onChange={(e)=>updateForm({phone: e.target.value})}></input></label>
                    <label>Nationality:    <select required id="nationality" name="nationality" onChange={(e)=>updateForm({nationality: e.target.value})}>
                                    <option value="" disabled>-- Choose one --</option>
                                    <option value="afghan">Afghan</option>
                                    <option value="albanian">Albanian</option>
                                    <option value="algerian">Algerian</option>
                                    <option value="american">American</option>
                                    <option value="andorran">Andorran</option>
                                    <option value="angolan">Angolan</option>
                                    <option value="antiguans">Antiguans</option>
                                    <option value="argentinean">Argentinean</option>
                                    <option value="armenian">Armenian</option>
                                    <option value="australian">Australian</option>
                                    <option value="austrian">Austrian</option>
                                    <option value="azerbaijani">Azerbaijani</option>
                                    <option value="bahamian">Bahamian</option>
                                    <option value="bahraini">Bahraini</option>
                                    <option value="bangladeshi">Bangladeshi</option>
                                    <option value="barbadian">Barbadian</option>
                                    <option value="barbudans">Barbudans</option>
                                    <option value="batswana">Batswana</option>
                                    <option value="belarusian">Belarusian</option>
                                    <option value="belgian">Belgian</option>
                                    <option value="belizean">Belizean</option>
                                    <option value="beninese">Beninese</option>
                                    <option value="bhutanese">Bhutanese</option>
                                    <option value="bolivian">Bolivian</option>
                                    <option value="bosnian">Bosnian</option>
                                    <option value="brazilian">Brazilian</option>
                                    <option value="british">British</option>
                                    <option value="bruneian">Bruneian</option>
                                    <option value="bulgarian">Bulgarian</option>
                                    <option value="burkinabe">Burkinabe</option>
                                    <option value="burmese">Burmese</option>
                                    <option value="burundian">Burundian</option>
                                    <option value="cambodian">Cambodian</option>
                                    <option value="cameroonian">Cameroonian</option>
                                    <option value="canadian">Canadian</option>
                                    <option value="cape verdean">Cape Verdean</option>
                                    <option value="central african">Central African</option>
                                    <option value="chadian">Chadian</option>
                                    <option value="chilean">Chilean</option>
                                    <option value="chinese">Chinese</option>
                                    <option value="colombian">Colombian</option>
                                    <option value="comoran">Comoran</option>
                                    <option value="congolese">Congolese</option>
                                    <option value="costa rican">Costa Rican</option>
                                    <option value="croatian">Croatian</option>
                                    <option value="cuban">Cuban</option>
                                    <option value="cypriot">Cypriot</option>
                                    <option value="czech">Czech</option>
                                    <option value="danish">Danish</option>
                                    <option value="djibouti">Djibouti</option>
                                    <option value="dominican">Dominican</option>
                                    <option value="dutch">Dutch</option>
                                    <option value="east timorese">East Timorese</option>
                                    <option value="ecuadorean">Ecuadorean</option>
                                    <option value="egyptian">Egyptian</option>
                                    <option value="emirian">Emirian</option>
                                    <option value="equatorial guinean">Equatorial Guinean</option>
                                    <option value="eritrean">Eritrean</option>
                                    <option value="estonian">Estonian</option>
                                    <option value="ethiopian">Ethiopian</option>
                                    <option value="fijian">Fijian</option>
                                    <option value="filipino">Filipino</option>
                                    <option value="finnish">Finnish</option>
                                    <option value="french">French</option>
                                    <option value="gabonese">Gabonese</option>
                                    <option value="gambian">Gambian</option>
                                    <option value="georgian">Georgian</option>
                                    <option value="german">German</option>
                                    <option value="ghanaian">Ghanaian</option>
                                    <option value="greek">Greek</option>
                                    <option value="grenadian">Grenadian</option>
                                    <option value="guatemalan">Guatemalan</option>
                                    <option value="guinea-bissauan">Guinea-Bissauan</option>
                                    <option value="guinean">Guinean</option>
                                    <option value="guyanese">Guyanese</option>
                                    <option value="haitian">Haitian</option>
                                    <option value="herzegovinian">Herzegovinian</option>
                                    <option value="honduran">Honduran</option>
                                    <option value="hungarian">Hungarian</option>
                                    <option value="icelander">Icelander</option>
                                    <option value="indian">Indian</option>
                                    <option value="indonesian">Indonesian</option>
                                    <option value="iranian">Iranian</option>
                                    <option value="iraqi">Iraqi</option>
                                    <option value="irish">Irish</option>
                                    <option value="israeli">Israeli</option>
                                    <option value="italian">Italian</option>
                                    <option value="ivorian">Ivorian</option>
                                    <option value="jamaican">Jamaican</option>
                                    <option value="japanese">Japanese</option>
                                    <option value="jordanian">Jordanian</option>
                                    <option value="kazakhstani">Kazakhstani</option>
                                    <option value="kenyan">Kenyan</option>
                                    <option value="kittian and nevisian">Kittian and Nevisian</option>
                                    <option value="kuwaiti">Kuwaiti</option>
                                    <option value="kyrgyz">Kyrgyz</option>
                                    <option value="laotian">Laotian</option>
                                    <option value="latvian">Latvian</option>
                                    <option value="lebanese">Lebanese</option>
                                    <option value="liberian">Liberian</option>
                                    <option value="libyan">Libyan</option>
                                    <option value="liechtensteiner">Liechtensteiner</option>
                                    <option value="lithuanian">Lithuanian</option>
                                    <option value="luxembourger">Luxembourger</option>
                                    <option value="macedonian">Macedonian</option>
                                    <option value="malagasy">Malagasy</option>
                                    <option value="malawian">Malawian</option>
                                    <option value="malaysian">Malaysian</option>
                                    <option value="maldivan">Maldivan</option>
                                    <option value="malian">Malian</option>
                                    <option value="maltese">Maltese</option>
                                    <option value="marshallese">Marshallese</option>
                                    <option value="mauritanian">Mauritanian</option>
                                    <option value="mauritian">Mauritian</option>
                                    <option value="mexican">Mexican</option>
                                    <option value="micronesian">Micronesian</option>
                                    <option value="moldovan">Moldovan</option>
                                    <option value="monacan">Monacan</option>
                                    <option value="mongolian">Mongolian</option>
                                    <option value="moroccan">Moroccan</option>
                                    <option value="mosotho">Mosotho</option>
                                    <option value="motswana">Motswana</option>
                                    <option value="mozambican">Mozambican</option>
                                    <option value="namibian">Namibian</option>
                                    <option value="nauruan">Nauruan</option>
                                    <option value="nepalese">Nepalese</option>
                                    <option value="new zealander">New Zealander</option>
                                    <option value="ni-vanuatu">Ni-Vanuatu</option>
                                    <option value="nicaraguan">Nicaraguan</option>
                                    <option value="nigerien">Nigerien</option>
                                    <option value="north korean">North Korean</option>
                                    <option value="northern irish">Northern Irish</option>
                                    <option value="norwegian">Norwegian</option>
                                    <option value="omani">Omani</option>
                                    <option value="pakistani">Pakistani</option>
                                    <option value="palauan">Palauan</option>
                                    <option value="panamanian">Panamanian</option>
                                    <option value="papua new guinean">Papua New Guinean</option>
                                    <option value="paraguayan">Paraguayan</option>
                                    <option value="peruvian">Peruvian</option>
                                    <option value="polish">Polish</option>
                                    <option value="portuguese">Portuguese</option>
                                    <option value="qatari">Qatari</option>
                                    <option value="romanian">Romanian</option>
                                    <option value="russian">Russian</option>
                                    <option value="rwandan">Rwandan</option>
                                    <option value="saint lucian">Saint Lucian</option>
                                    <option value="salvadoran">Salvadoran</option>
                                    <option value="samoan">Samoan</option>
                                    <option value="san marinese">San Marinese</option>
                                    <option value="sao tomean">Sao Tomean</option>
                                    <option value="saudi">Saudi</option>
                                    <option value="scottish">Scottish</option>
                                    <option value="senegalese">Senegalese</option>
                                    <option value="serbian">Serbian</option>
                                    <option value="seychellois">Seychellois</option>
                                    <option value="sierra leonean">Sierra Leonean</option>
                                    <option value="singaporean">Singaporean</option>
                                    <option value="slovakian">Slovakian</option>
                                    <option value="slovenian">Slovenian</option>
                                    <option value="solomon islander">Solomon Islander</option>
                                    <option value="somali">Somali</option>
                                    <option value="south african">South African</option>
                                    <option value="south korean">South Korean</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="sri lankan">Sri Lankan</option>
                                    <option value="sudanese">Sudanese</option>
                                    <option value="surinamer">Surinamer</option>
                                    <option value="swazi">Swazi</option>
                                    <option value="swedish">Swedish</option>
                                    <option value="swiss">Swiss</option>
                                    <option value="syrian">Syrian</option>
                                    <option value="taiwanese">Taiwanese</option>
                                    <option value="tajik">Tajik</option>
                                    <option value="tanzanian">Tanzanian</option>
                                    <option value="thai">Thai</option>
                                    <option value="togolese">Togolese</option>
                                    <option value="tongan">Tongan</option>
                                    <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                                    <option value="tunisian">Tunisian</option>
                                    <option value="turkish">Turkish</option>
                                    <option value="tuvaluan">Tuvaluan</option>
                                    <option value="ugandan">Ugandan</option>
                                    <option value="ukrainian">Ukrainian</option>
                                    <option value="uruguayan">Uruguayan</option>
                                    <option value="uzbekistani">Uzbekistani</option>
                                    <option value="venezuelan">Venezuelan</option>
                                    <option value="vietnamese">Vietnamese</option>
                                    <option value="welsh">Welsh</option>
                                    <option value="yemenite">Yemenite</option>
                                    <option value="zambian">Zambian</option>
                                    <option value="zimbabwean">Zimbabwean</option>
                    </select></label>
                </div>
            </div>

            <div className="raw raw-2">
                <div className="raw-2-left nr-box">
                    <h3>Match details: </h3>
                    <label>Date: <input type="date" name="date" onChange={(e)=>updateForm({matchDate: e.target.value})}></input></label>
                    <label>Opponent: <input type="text" name="opponent" onChange={(e)=>updateForm({opponent: e.target.value})}></input></label>
                    <label>Competition: <input type="text" name="competition" onChange={(e)=>updateForm({competition: e.target.value})}></input></label>
                </div>
                <div className="raw-2-right nr-box">
                    <h3>Player details: </h3>
                    <label>Height:<select onChange={(e)=>updateForm({height: e.target.value})}>
                        {size.map(size => <option value={size} key={size}>{size}</option>)}
                    </select><span>cm</span></label>
                    <label>Weight:<select onChange={(e)=>updateForm({weight: e.target.value})}>
                        {size.map(size => <option value={size} key={size}>{size}</option>)}
                    </select><span>Kg</span></label>
                    <label>Favorite foot: <select onChange={(e)=>updateForm({favoriteFoot: e.target.value})}>
                            <option value="right" key={1}>Right</option>
                            <option value="left" key={2}>Left</option>
                        </select></label>
                    <label>Position: <select required onChange={(e)=>updateForm({position: e.target.value})}>
                            <option name="" disabled>--Choose one--</option>
                            <option name="goalkeeper">Goalkeeper</option>
                            <option name="right-back">Right-back</option>
                            <option name="center-back">Center-back</option>
                            <option name="left-back">Left-back</option>
                            <option name="righ-midfielder">Right-midfielder</option>
                            <option name="defensive-center-midfielder">Defensive-center-midfielder</option>
                            <option name="Center-midfielder">Center-midfielder</option>
                            <option name="attacking-center-midfielder">Attacking-center-midfielder</option>
                            <option name="left-midfielder">Left-midfielder</option>
                            <option name="right-winger">Right-winger</option>
                            <option name="left-winger">Left-winger</option>
                            <option name="striker">Striker</option>
                        </select></label>
                </div>
            </div>

            <h2>Player analysis</h2>
            <div className="raw raw-3">
                <div className="raw-3-left nr-box">
                    <h3>Offensive Process</h3>
                    <textarea className="nr-textArea" onChange={(e)=>updateForm({offensiveProcess: e.target.value})}></textarea>
                </div>
                <div className="raw-3-right nr-box">
                    <h3>Deffensive process</h3>
                    <textarea className="nr-textArea" onChange={(e)=>updateForm({defensiveProcess: e.target.value})}></textarea>
                </div>
            </div>
            <div className="raw raw-4">
                <div className="raw-4-left nr-box">
                    <h3>Offensive Transition</h3>
                    <textarea className="nr-textArea" onChange={(e)=>updateForm({offensiveTransition: e.target.value})}></textarea>
                </div>
                <div className="raw-4-right nr-box">
                    <h3>Deffensive Transition</h3>
                    <textarea className="nr-textArea" onChange={(e)=>updateForm({defensiveTransition: e.target.value})}></textarea>
                </div>
            </div>
            <div className="raw raw-5">
                <div className="raw-5-left nr-box">
                    <h3>Psychological:</h3>
                    <textarea className="nr-textArea" onChange={(e)=>updateForm({psychological: e.target.value})}></textarea>
                </div>
                <div className="raw-5-right nr-box">
                    <h3>Physical:</h3>
                    <textarea className="nr-textArea" onChange={(e)=>updateForm({physical: e.target.value})}></textarea>
                </div>
            </div>

            <div className="raw-6">
                <div className="central">
                    <h3>Strengths and Weaknesses</h3>
                    <textarea onChange={(e)=>updateForm({strenghtsAndWeaknesses: e.target.value})}></textarea>
                </div>
                <div>
                    <h3>Level of recomendaion:</h3>
                    <select className="recommendation" onChange={(e)=>updateForm({recommendationLevel: e.target.value})}>
                        {levelRecommendation.map(level => <option value={level} >{level}</option>)}
                    </select>
                </div>
            </div>

            <div className="nr-buttons">
                <button type="reset">Clear</button>
                <button onClick={createReport}>Submit</button>
            </div>
            </form>
        </div>
    )
}