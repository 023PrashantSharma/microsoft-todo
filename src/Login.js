import React, { useState } from "react";
import './login.scss';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import img3 from './images/userlogin.webp';

import { IoMdArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";



function Login() {
    const [email ,setEmail] = useState("");
    const [emailerr,setemailerr] = useState("");
     
    const [password,setPassword] = useState("");
    const[ passworderr,setPassworderr] = useState("")

    const handleChange = (e, name) => {
        const user = {};
        user[name] = e.target.value;
        switch(name) {
            case 'firstmail':
                if(user.firstmail.length<=4){
                    setemailerr("Email too short !!")
                    setEmail(user.firstmail)
                }
                else{
                    setemailerr("")
                    setEmail(user.firstmail)
                }
                break;
            case 'firstpass' :
                if(user.firstpass.length<=6){
                    setPassworderr("password is short !!")
                    setPassword(user.firstpass)
                }
                else{
                    setPassworderr('')
                    setPassword(user.firstpass)
                }
                default : break;
        }
    }

    const login =()=>{
        if (email==""){
            setemailerr("email required !!")
        }
       else if (password=="")
        {
            setPassworderr("password required !!")
            
        }
    }

    return (
        <div className="third-main-container">
            <div className="container-top">
                <div className=" top-right">
                    <img className="signup-img" src={img3} />

                </div>
                <div className=" top-left">
                    <div className="left2">
                        <NavLink className="arrow" to="/screen"> <IoMdArrowForward /></NavLink>
                    </div>
                </div>

            </div>
            <div className="container-down">
                <div className="down-child1">
                    <div className="child1-top">
                        <div className="top-child1">
                            Email account

                        </div>
                        <div className="top-child2">
                            
                            <input className="mail"   onChange={(e)=>handleChange(e,'firstmail')} name="firstmail" type="text"
                             placeholder="Email" />
                              {emailerr && <small className="text-danger message">{emailerr}</small>}
                            
                          
                        </div>
                       
                            


                    </div>
                    <div className="child1-down">
                        <div className="down-child1">
                            Password
                        </div>
                        <div className="down-child2">
                            <input className="password"    onChange={(e)=>handleChange(e,'firstpass')} name="firstpass" type="password"
                             placeholder="Password" />
                             {passworderr && <small className="text-danger message">{passworderr}</small>}
                        </div>

                    </div>

                </div>
                <div className="down-child2">
                    <div className="child2-top">
                        <div className="sign-up" onClick={login}>
                            
                            log in
                        </div>

                    </div>
                    <div className="child2-middle">
                        or
                    </div>
                    <div className="child2-bottom">
                        <div className="bottom-left">
                            <div className="google1">
                                < FcGoogle className="google" />
                            </div>
                        </div>
                        <div className="bottom-middle">
                            <div className="apple1">
                                < BsApple className="apple" />
                            </div>
                        </div>
                        <div className="bottom-right">
                            <div className="facebook1">
                                < BsFacebook className="facebook" />
                            </div>


                        </div>
                    </div>



                </div>


            </div>

        </div>
    )
}
export default Login;