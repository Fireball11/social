import React from "react";
import classes from './ListItem.module.css';
import CheckIcon from '../icons/CheckIcon.jsx';

let Data = new Date()

const ListItem = () => {
    return (
        <div className={classes.ListItem}>
            <img src="https://avatars.mds.yandex.net/get-yapic/21377/enc-2bbc2fbe1066e8c96c01f21bd71b2093bb4061c46a689efa2124d41ca8a4655a/islands-200" alt="" className={classes.Avatar} />
            <div className={classes.Text}>
                <h4>Имя Фамилия</h4>
                <span>Сообщение</span>
            </div>
            <div className={classes.MsgInfo}>
                <CheckIcon id="delivered" className={classes.CheckIcon}></CheckIcon>
                <span className={classes.Time}>{Data.getHours()}:{Data.getMinutes()}</span>
            </div>
        </div>
    );
}

export default ListItem;