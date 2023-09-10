import React from "react";
import classes from './Sidebar.module.css';
import ListHeader from "./ListHeader";
import ListItem from './ListItem';

const Sidebar = (props) => {
    return (
        <div className={classes.Sidebar}>
            <ListHeader>

            </ListHeader>
            <div className="ListMsg">
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
            </div>
        </div>
    );
};

export default Sidebar;