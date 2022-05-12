import React from "react";

function Header(props){

    const {title} = props;

    return(


        <div id="Header" className="h-20 bg-yellow-500 flex justify-center">
            <span className="text-white text-3xl text-bold text-xl self-center">{title}</span>
            
        </div>
    );
}

export default Header;