import React from 'react';


export default function SmallImage(props) {


    return (
    <img className='thumb hover:opacity-75 transition duration-250 ease-in-out' 
            src={props.image} 
            id={props.category}
            onClick={() => props.handleImgClick(props)}
            />
    )
}
  