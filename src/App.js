import "./App.css";
import Home from '../src/Pages/home_page/Home';
import Auth from "./Pages/Auth/Auth";
import {Routes, Route, Navigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import Profile from "./Pages/Profile/Profile";

function App() {

  // importing users
  const user = useSelector((state) => state.authReducer.authData)

  return (
    <div className="App">
      <div className="blur" style={{top: '-18%', right: '0'}}></div>
      <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
      <Routes>
        <Route path="/" element={user?<Navigate to = "home"/>: <Navigate to = 'auth'/>}/>
        <Route path = '/home' element = {user? <Home/>: <Navigate to = "../auth"/>}/>
        <Route path = "/auth" element = {user? <Navigate to = '../home'/>: <Auth/> }/>

        <Route path = '/profile/:id' element = {user? <Profile/>: <Navigate to = "../auth"/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
