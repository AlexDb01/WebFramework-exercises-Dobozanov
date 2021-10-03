import React from 'react';
import styles from './Mainsection_Article.module.css';

export default function Mainsection_Article(props){
    return(
        <div className={styles.container}>
            <div className={styles.articleImg}></div>
            <div className={styles.body}>
                <span className={styles.articleTopic}>{props.articleTopic} | </span> {props.body}
            </div>
        <div className={styles.infoContainer}>
            <div className={styles.info}>
                {props.topic} {props.date}
            </div>
        </div>
        </div>
    )
}