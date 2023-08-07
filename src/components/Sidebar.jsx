import React from "react";
import classes from './Sidebar.module.css';
import ListMsg from "./ListMsg";

const Sidebar = (props) => {
    return (
        <div className={classes.Sidebar}>
            <ListMsg>
                
            </ListMsg>
        </div>
    );
};

export default Sidebar;