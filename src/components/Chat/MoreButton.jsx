import React from "react";
import MoreIcon from "./MoreIcon";
import classes from "./Chat.module.css";


const MoreButton = () => {
    return (
        <div className={classes.MoreButton}>
            <MoreIcon></MoreIcon>
        </div>
    )
}

export default MoreButton;