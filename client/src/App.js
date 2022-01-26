
import './App.css';
import {Header} from "./components/homepage/header";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import {About} from './components/homepage/about';
import {HomepageBody} from './components/homepage/homepageBody';
import {Footer} from './components/homepage/footer';
import { SignUp } from './components/Signup/signup';
import {PrivHeader} from './components/private/homepage/header/privHeader';
import {NewReport} from './components/private/new-report/newReport';
import {Navlink} from './components/private/homepage/navlink/navlink';
import {FirstTeamPlayerReports} from './components/private/first-team-report/firstTeamPlayerReports';
import {PlayerReport} from './components/private/playerReport/playerReport';
import { TodoList } from './components/private/schedule/todoList';
import { TodoInfo } from './components/private/schedule/todoInfo';
import Axios from 'axios';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [playerReport, setPlayerReport] = useState({});
  

  const getPlayerReportForRoute = (id) =>{
    Axios.get(`http://localhost:3001/getPlayerReport/${id}`).then(res=>{
        console.log(res.data)
        setPlayerReport(res.data[0])
    })
}

  return (
    <BrowserRouter>
      {!isLoggedIn && (
        <>
          <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            <Route path="*" element={<HomepageBody />}></Route>
            <Route path="/home" element={<HomepageBody />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
          <Footer />
          </>
      )}
      {isLoggedIn && (
        <>
            <PrivHeader setIsLoggedIn={setIsLoggedIn}/>
            <Navlink />
            <Routes>
              <Route path="/privHome" element={<PrivHeader />}></Route>
              <Route path="/newReport" element={<NewReport />}></Route>
              <Route path="/playerReports" element={<FirstTeamPlayerReports getPlayerReportForRoute={getPlayerReportForRoute} />}></Route>
              <Route path="/playerReport" element={<PlayerReport report={playerReport}/>} ></Route>
              <Route path="/schedule" element={<TodoList />} ></Route>
              <Route path="/newTodo" element={<TodoInfo />} ></Route>
            </Routes>
            
        </>
      )}
      
    </BrowserRouter>
    
  );
}

export default App;
