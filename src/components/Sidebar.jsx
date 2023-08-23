import React from "react";
import classes from './Sidebar.module.css';
import ListMsg from "./ListMsg";
import ListHeader from "./ListHeader";

const Sidebar = (props) => {
    return (
        <div className={classes.Sidebar}>
            <ListHeader>

            </ListHeader>
            <ListMsg>
                
            </ListMsg>
        </div>
    );
};

export default Sidebar;