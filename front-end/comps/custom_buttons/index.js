import React from 'react';
import './signIn.css';

<link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>

const TealButton = ({text, color}) => <div 
    style={{backgroundColor:color}}
    className="signIn-button-outer">
    <div className="signIn-button-inner">
        {text}
    </div>
</div>

TealButton.defaultProps = {
    text:"default text",
    color:"#00909B",
}

export default TealButton;