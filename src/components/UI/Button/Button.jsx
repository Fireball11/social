import React from "react";
import ButtonIcon from "../icons/ButtonIcons";
import "./Button.css"

const Button = (props) => {
    
    return (
        <div className="Button">
            <ButtonIcon color={props.color} icon={props.icon} ></ButtonIcon>
        </div>
    )
}

export default Button;