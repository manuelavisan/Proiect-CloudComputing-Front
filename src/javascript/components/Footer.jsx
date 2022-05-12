import React from "react";

function Footer(props){

    const {title} = props;

    return(


        <div id="Footer" className="h-20 bg-yellow-500 flex justify-center absolute inset-x-0 bottom-0 h-16">
            <span className="text-white text-bold text-xl self-center">{title}</span>
            
        </div>
    );
}

export default Footer;