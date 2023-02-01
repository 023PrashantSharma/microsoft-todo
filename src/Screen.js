import React from "react";
import './Screen.scss';
import img3 from './images/userlogin.webp';
import { NavLink } from "react-router-dom";

const Screen = () => {
   

    return (
        <>
            <div className="first-main-container">
                <div className="main-container">
                    <div className="main-child1">
                        Let,s get started!
                    </div>
                    <div className="main-child2">
                        <div className="child2-child1">
                            <img className="signup-img" src={img3} />
                        </div>
                    </div>
                    <div className="main-child3">
                        <div className="child3-child1">
                            <div className="child3-child1-top">
                                <div className="top-child" >
                                   <NavLink className="signup" to="/Signup"> Sign up</NavLink>

                                </div>

                            </div>
                            <div className="child3-child1-down">
                                <div className="down-left">
                                    Already have an account?
                                </div>
                                <div className="down-right">
                                    <NavLink className="log" to="/login">Log in</NavLink>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                
               
            </div>

        </>
    )
}
export default Screen;