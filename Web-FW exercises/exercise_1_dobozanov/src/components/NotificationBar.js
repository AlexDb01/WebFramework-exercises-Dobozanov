import React from 'react';
import styles from './NotificationsBar.module.css';

export default function NotificationBar(props){
    return(
        <div className={styles.container}>
            <span className={styles.header}>{props.title}: </span>{props.text}
        </div>
    )
}