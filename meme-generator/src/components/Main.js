import React from "react";
import data from '../data';
import { useState } from "react";
export default function Main(){
    
    // const[randomImage,setRandomImage] = useState(meme.randomImage);
    const[meme,setMeme] = 
    useState({topText:"",
            bottomText:"",
            randomImage:"https://i.imgflip.com/1c1uej.jpg"});
    // console.log(meme.randomImage);   
    // const[allMemeImages,setAllMemeImages]=useState(data);
    function generateMeme(){

        // console.log(data);
        let a=Math.floor(Math.random()*100);
        let url=data.data.memes[a].url;
        setMeme((image)=>{
            return{...image,randomImage:url}
        });
        // document.querySelector('.imagg').innerHTML=`<img src=${data.data.memes[a].url}  className="imu" alt="">`;
    }
    function handleChange(event){
        setMeme((prev)=>{
            return{...prev,[event.target.name]:event.target.value}
        })
        console.log(event.target.value);

    }
    return(

        <section className="sec">
         
         <form>
         <input className="search" type="text" name="topText"  onChange={handleChange} value={FormData.topText} placeholder="toptext"/>   
         <input className="search" type="text" name="bottomText" onChange={handleChange} value={FormData.bottomText} placeholder="bottomtext" />
         </form>  
         <button className="btn" onClick={generateMeme}>Get a new meme image  🖼</button> 
         <div className="imagg">
         <img src={meme.randomImage}  className="imu" alt="" />
         <h3 className="toptext">{meme.topText}</h3>
         <h3 className="bottomtext">{meme.bottomText}</h3>
         </div>
         

        </section>
    )

}