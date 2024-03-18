import React from "react";
export default function Header(){
    return(
        <header className="header">
            <img src={require("../images/troll-face.png")} className="img" alt="" />
            <span className="mid">Meme Generator</span>
            <span className="right">React Course - Project 3</span>

        </header>
    )
}