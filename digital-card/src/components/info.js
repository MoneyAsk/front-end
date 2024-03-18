import React from "react";
import Twit from '../images/icons8-twitter-25.png';
import Insta from '../images/icons8-instagram-24.png';
import Fb from '../images/icons8-facebook-24.png';
import Git from '../images/icons8-github-24.png';
export default function Info(){
    return(
        <div className="footer">
            <span>
            <img src={Twit}alt="" className="last" />
            <img src={Insta} alt="" className="last" />
                
            <img src={Fb} alt="" className="last" />
            <img src= {Git} alt="" className="last" />
            </span>
           </div>
    )
}