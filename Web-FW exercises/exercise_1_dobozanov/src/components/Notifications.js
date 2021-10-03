import React from 'react';
import styles from './Notifications.module.css';
import NotificationBar from './NotificationBar';

const notificationBarData =[
    {
        title: 'ANALYSE',
        text: 'Es wird analysiert, aber was wird analysiert?'
    },
    {
        title: 'ICE HOCKEY',
        text: 'Kittos Jussi!'
    },
    {
        title: 'CORONA',
        text: 'Menschen sterben weil keine Impfung, lol.'
    }
]

export default function Notifications(){
    return(    
    <div className={styles.container}>
        {
            notificationBarData.map(element => <NotificationBar 
                title={element.title}
                text={element.text}
                />)
        }
    </div>
    )
}