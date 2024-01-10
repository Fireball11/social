import React from "react";
import classes from "./Chat.module.css";
import MenuButton from "./MenuButton";

const ChatHeader = () => {
    return (
        < div className={classes.ChatHeader} >
            <img src="https://avatars.mds.yandex.net/get-yapic/21377/enc-2bbc2fbe1066e8c96c01f21bd71b2093bb4061c46a689efa2124d41ca8a4655a/islands-200" alt="" className={classes.Avatar} />
            <MenuButton></MenuButton>
        </div >
    )
}

export default ChatHeader;