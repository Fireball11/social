import React from "react";
import ButtonIcon from "../UI/icons/ButtonIcons";
import classes from "./Chat.module.css";


const MenuButton = () => {
    return (
        <div className={classes.MenuButton}>
            <ButtonIcon color="#FFFFFF" icon="menu" ></ButtonIcon>
        </div>
    )
}

export default MenuButton;