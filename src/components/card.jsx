import React from "react";

const Card = (props) => {

    return (
        <div className="card"> 
           
           <img src={props.image} height={200} />
           <h3>{props.text}</h3>
               
            
        </div>

    )
  
}

export default Card;