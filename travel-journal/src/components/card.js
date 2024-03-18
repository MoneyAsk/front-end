import React from "react";
export default function Card(props){
    return(
        <div className="card">
        <img src={require(`../images${props.item.imageUrt}`)} className="img" alt="" />
        <div className="second">
        
        <p className="location"><img className="pin" src= {require('../images/icons8-google-maps-24.png')}alt="" /> {props.item.location} <a href={props.item.googleMapsUr1} className="anchor">View On Google Maps</a></p>
        <p className="place">{props.item.title}</p>
        <p className="date">{props.item.startDate} - {props.item.endDate}</p>
        <p className="descp">{props.item.description}</p>
        </div>
        </div>
    )
}
/* Mount Fuji */


