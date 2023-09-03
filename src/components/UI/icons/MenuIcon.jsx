import React from "react";

const MenuIcon = (props) => {

    const Fill = {
        fill: props.color,
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" style={Fill}>
            <path d="M160-269.231v-40h640v40H160ZM160-460v-40h640v40H160Zm0-190.769v-40h640v40H160Z" />
        </svg>
    )
}

export default MenuIcon;