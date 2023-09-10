import React from "react";
import ChatHeader from "./ChatHeader";
import classes from "./Chat.module.css";

const Chat = () => {
    return (
        <div className={classes.Chat}>
            <ChatHeader></ChatHeader>
        </div>
    )
}

export default Chat;
