import React, { useState } from "react";
import './drawer.scss';
import img3 from './images/userlogin.webp';

import { BsApple } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';
import 'bootstrap/dist/css/bootstrap.min.css';



function Signup() {
    const navigate = useNavigate();


    const [password, setPassword] = useState(" ");
    const [passworderr, setPassworderr] = useState("");

    const [phonepe, Setphonepe] = useState('');
    const [phonepeerr, Setphonepeerr] = useState('');

    const [email, setEmail] = useState("");
    const [emailerr, setemailerr] = useState("");
    const clientid = "609010642042-q5ui10eaep5m2igfal90nmbnelk4s7b4.apps.googleusercontent.com";
   


    const handleChange = (e, name) => {
        const user = {};
        user[name] = e.target.value;
        switch (name) {
            case 'firstname':
                if (user.firstname.length <= 3) {
                    Setphonepeerr('Username is short!!')
                    Setphonepe(user.firstname)
                }

                else {
                    Setphonepeerr('')
                    Setphonepe(user.firstname)
                }
                break;
            case 'firstmail':
                if (user.firstmail.length <= 6) {
                    setemailerr(" email is invalid !!")
                    setEmail(user.firstmail)
                }
                else {
                    setemailerr(' ')
                    setEmail(user.firstmail)
                }
                break;
            case 'firstpass':
                if (user.firstpass.length <= 6) {
                    setPassworderr("**password too short")
                    setPassword(user.firstpass)
                }
                else {
                    setPassworderr('')
                    setPassword(user.firstpass)
                }
                break;

            default: break;
        }
    }



    const submit = () => {
        if (phonepe == "") {
            Setphonepeerr('Username required !!')
        }
        else if (email == "") {
            setemailerr(" email required !!")
        }
        else if (password == "") {
            setPassworderr("password is required !!")
        }

    }
    const handleLogin = (googleData) => {
        console.log("you are successfully sign  in", googleData);

    }
    const responseFacebook = (data) => {
        console.log("succefully login", data);
      }
     
     

    return (
        < div className="second-main-container" >
            <div className="second-container-top">
                <div className="top-left">
                    <div className="left1">
                        <NavLink className="arrow" to="/screen"> <BiArrowBack /></NavLink>
                    </div>
                </div>
                <div className="top-right">
                    <img src={img3} className="signup" />

                </div>

            </div>
            <div className="second-container-down">
                <div className="down-child1">
                    <div className="child1-top">
                        <div className="name">
                            Full name
                        </div>
                        <div className="text">


                            <input className="text1" onChange={(e) => handleChange(e, 'firstname')} name="phonepayn" type="text" placeholder="Full Name" autoComplete='off' />
                            {phonepeerr && <small className="text-danger message">{phonepeerr}</small>}




                        </div>

                    </div>
                    <div className="child1-middle">
                        <div className="email">
                            E-mail address
                        </div>
                        <div className="text">
                            <input className="text2" onChange={(e) => handleChange(e, 'firstmail')} name="firstmail" type="email"
                                placeholder="Email" />
                            {emailerr && <small className="text-danger message">{emailerr}</small>}

                        </div>

                    </div>
                    <div className="child1-bottom">
                        <div className="password">
                            Password
                        </div>
                        <div className="text">
                            <input className="text3" onChange={(e) => handleChange(e, 'firstpass')} name="firstpass" type="password" placeholder="Password" />
                            {passworderr && <small className="text-danger message">{passworderr}</small>}

                        </div>

                    </div>

                </div>
                <div className="down-child2">
                    <div className="child2-son1">
                        <div className="signup">
                            <button className="button1" onClick={submit}>sign up</button>
                        </div>

                    </div>
                    <div className="child2-son2">
                        or
                    </div>
                    <div className="child2-son3">
                        <div className="son3-left">
                            <div className="google1">
                                <GoogleLogin className="google2" clientId={clientid}
                                    buttonText=" "

                                    onSuccess={handleLogin}>

                                </GoogleLogin>
                            </div>
                        </div>

                        <div className="son3-middle">
                            <div className="apple1">
                                < BsApple className="apple" />
                            </div>

                        </div>
                        <div className="son3-right">
                            <div className="facebook1">
                                <FacebookLogin
                                    appId="244813004500731"
                                    autoLoad={true}
                                    textButton="facebook"
                                    fields="name,email,picture"
                              
                                    callback={responseFacebook} />
                            </div>
                        </div>

                    </div>
                    <div className="child2-son4">
                        <div className="son4-left">
                            Already have an account?
                        </div>
                        <div className="son4-right">
                            <NavLink className="right-log" to="/login">log in</NavLink>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}
export default Signup;

