import React from "react";
import './styles/Books.css';
const Books = props => {
    return (
        <div className="Book-item">
            <h3 onClick={props.change}>Book Name: {props.name} </h3>
            <h5>Author: {props.author}</h5>
            <input type="text" onChange={props.bookNameUpdate} value={props.name
            
            }/>
        </div>
    );
}

export default Books;