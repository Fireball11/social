import React from "react";
import classes from './Sidebar.module.css';
import MenuButton from './UI/MenuButton.jsx';

const ListHeader = () => {
    return (
        <div className={classes.ListHeader}>
            <MenuButton></MenuButton>
        </div>
    )
}

export default ListHeader;