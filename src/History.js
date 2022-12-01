import React from "react";

const History = (props) => {
    if (props.allClicks.length === 0 ){
        return(
            <div>
                The app is used by pressing the buttons
            </div>
        )
    }

    return(
        <div>
            Button press History: {props.allClicks.join(' - ')}
        </div>
    )
}

export default History