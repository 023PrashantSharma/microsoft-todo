import React from "react";
import img1 from './images/123.png';
import './style.css';
function Image(){
    return(
    
        <img className="photo" src={img1} height={200} width={200} />
    
    );
}
export default Image;