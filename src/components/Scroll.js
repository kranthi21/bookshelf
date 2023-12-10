import React from "react";

const Scroll = (props) => {

    return (
        <div className="ma2" style={{overflow:'scroll', border: '2px solid black', height:'800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;