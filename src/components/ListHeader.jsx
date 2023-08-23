import React from "react";
import classes from './Sidebar.module.css';
import MenuIcon from "./UI/icons/MenuIcon";

const ListHeader = () => {
    return (
        <div className={classes.ListHeader}>
            <MenuIcon className={classes.menuIcon}></MenuIcon>
        </div>
    )
}

export default ListHeader;