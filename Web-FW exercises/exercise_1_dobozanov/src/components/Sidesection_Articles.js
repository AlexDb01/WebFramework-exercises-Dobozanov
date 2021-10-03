import React from 'react';
import styles from './Sidesection_Article.module.css';

export default function Sidesection_Article(props){
    return(
        <div className={styles.container}>
            <div className={styles.number}>{props.number}</div>
            <div className={styles.body}>
                <span className={styles.title}>{props.title}</span> | {props.body}
            </div>
        </div>
    )
}