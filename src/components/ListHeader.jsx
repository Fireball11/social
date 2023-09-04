import React from "react";
import classes from './Sidebar.module.css';
import Button from "./UI/Button/Button.tsx";

const ListHeader = () => {
    return (
        <div className={classes.ListHeader}>

            <Button icon="menu" color="#AAAAAA" />
            
        </div>
    )
}

export default ListHeader;