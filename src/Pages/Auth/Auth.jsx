import React from 'react';

import './Auth.scss';
import Logo from '../../img/logo.png';
import { useState } from 'react';
import  {useDispatch, useSelector} from 'react-redux';
import { logIn, signUp } from '../../actions/AuthAction';



const Auth = () => {

    // add loading to BTN
     // dispatch hoock from rdux
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.authReducer.loading)

    const [isSignUp, setIsSignUp] = useState(true)

   


    // handling submit

    const [data, setData] = useState({firstname: "", lastname: "", password: "", confirmpass: "", username: ""})

     // confirming password 
     const [confirmPass, setConfirmPass] = useState(true)

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp){
            data.password === data.confirmpass 
            ? dispatch(signUp(data)) 
            : setConfirmPass(false);
        }else
        {
            dispatch(logIn(data))
        }
    }

    const resetForm =()=>{
        setConfirmPass(true);
        setData({firstname: "", lastname: "", password: "", confirmpass: "", username: ""})
    }

   

  return (
    <div className="Auth">
        {/* left side */}
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="webname">
                <h1 className='login-title'>Samuel Social</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>
        {/* Right side */}
       
        <div className="a-right">
            <form action="" className="inForm authForm" onSubmit={handleSubmit}>
                <h3>{isSignUp ? "Sign up" : "Log in"}</h3>
                
                
                {isSignUp && 
                <div>
                    <input type="text" 
                    placeholder='First Name' 
                    className='infoInput' 
                    name='firstname'
                    onChange={handleChange}
                    value={data.firstname}
                    />
                    <input type="text" 
                    placeholder='Last Name' 
                    className='infoInput' 
                    name='lastname'
                    onChange={handleChange}
                    value={data.lastname}/>
                </div>}
                    
                <div className="username">
                    <input type="email" 
                    placeholder='User Name' 
                    className='infoInput' 
                    name='username'
                    onChange={handleChange}
                    value={data.username}/>


                    {/* correct value.username */}



                </div>
                <div className="passowrd">
                    <input type="password" 
                    placeholder='Password' 
                    className='infoInput' 
                    name='password'
                     onChange={handleChange}
                     value={data.password}/>

                    {isSignUp && <input type="password" 
                    placeholder='Confirm Password' 
                    className='infoInput' 
                    name='confirmpass'
                    onChange={handleChange}
                    value={data.confirmpass}/>}
                    
                </div>
                    <span style={{display: confirmPass? "none": "block", 
                    fontSize: "13px", 
                    color: "red", 
                    alignSelf: "flex-end"
                    }}>
                        * Confirm Password is not same
                    </span>


                <div>
                    <span style={{fontSize: "12px", cursor: "pointer"}} onClick = {() => {setIsSignUp((prev) => !prev); resetForm()}}>
                        {isSignUp ? "Already have an account. Login" : "Dont have an account? Sign Up" }</span>
                </div>
                <button className='button infoButton' type='submit' disabled={loading}>{loading? "Loading..." : isSignUp ? "Signup" : "Login"}</button>
            </form>
        </div>
    </div>
  )
}

export default Auth