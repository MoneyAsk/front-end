import React from "react";
import Email from '../images/icons8-email-24.png'
import Link from '../images/icons8-linkedin-24.png'
export default function Group2(){
    return(
        <div className="group2">
            <h1 className="name">Laura Smith</h1>
            <h4 className="text">Frontend Developer</h4>
            <h6 className="web">laurasmith.website</h6>
            <div>
            <button className="btn"><div className="b1"><img src={Email} style={{width:16 , height:16,marginRight:5}} alt="" /><span>Email</span></div></button>
            <button className="btn1"><div className="b1"><img src={Link} style={{width:16 , height:16,marginRight:5}} alt="" /><span>LinkedIn</span></div></button>
            </div>
            <div className="content"> 
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}