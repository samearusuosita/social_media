import React from 'react';

import './Auth.scss';
import Logo from '../../img/logo.png';



const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="webname">
                <h1 className='login-title'>Samuel Social</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>
        {/* <SignUp/> */}
        <LogIn/>
    </div>
  )
}

export default Auth

function LogIn(){
    return(
        <div className="a-right">
            <form action="" className="infoForm authForm">
                <h3>Login</h3>
                
                <div className="username">
                    <input type="text" placeholder='User Name' className='infoInput' name='usertname'/>
                </div>
                <div className="username">
                    <input type="text" placeholder='Password' className='infoInput' name='password'/>
                </div>
                
                <div>
                    <span className='haveAccount'>Dont have an account. Signup</span>
                    <button className='button infoButton' type='submit'>Login</button>
                </div>
                
            </form>
        </div>
    )
}




function SignUp(){
    return(
        <div className="a-right">
            <form action="" className="inForm authForm">
                <h3>Sign Up</h3>
                <div className="formdata">
                    <input type="text" placeholder='First Name' className='infoInput' name='firstname'/>
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastname'/>
                </div>
                <div className="username">
                    <input type="text" placeholder='User Name' className='infoInput' name='usertname'/>
                </div>
                <div className="passowrd">
                    <input type="text" placeholder='Password' className='infoInput' name='password'/>
                    <input type="text" placeholder='Confirm Password' className='infoInput' name='confirmpassword'/>
                </div>
                <div>
                    <span className='haveAccount'>Already have an account. Login</span>
                </div>
                <button className='button infoButton' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}
