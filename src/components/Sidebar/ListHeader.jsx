import React from "react";
import classes from './Sidebar.module.css';
import Button from "../UI/Button/Button";
import Search from "../UI/Search/Search";

const ListHeader = () => {
    return (
        <div className={classes.ListHeader}>
            <Button icon="menu" color="#AAAAAA" />
            <Search />
        </div>
    )
}

export default ListHeader;