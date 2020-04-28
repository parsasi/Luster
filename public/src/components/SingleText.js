import React from 'react';
import '../styles/chat-page.css'

export default (props) => {
    const ownClass = props.own ? "own" : "other"
    return (
        <div class="individual-message bubbleWrapper">
        <div class={"inlineContainer " + ownClass}>
            <div className={ownClass + " " + ownClass+"Bubble"}>
                {props.text}
            </div>
        </div><span class={ownClass}>{props.time}</span>
        </div>
    )
}



