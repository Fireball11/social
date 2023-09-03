import React from 'react';
import MenuIcon from './icons/MenuIcon.jsx';
import classes from './MenuButton.module.css';

const MenuButon = (props) => {
    // const Size = {
    //     width: props.size, 
    //     height: props.size,
    // }
    return (
        <div  className={classes.MenuButton}>
            <MenuIcon color="#AAAAAA"></MenuIcon>
        </div>
    )
}

export default MenuButon;