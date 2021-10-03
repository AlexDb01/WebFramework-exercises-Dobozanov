import React, {useState} from 'react';
import styles from './Article.module.css';

export default function Article(props){

    /*const onClickviewWine = (id) =>{
        props.viewWine(id);
    }*/

    return(
        <div className={styles.container}>
            <div>
                <div className={styles.region}>{props.region}</div>
                <div className={styles.brand}>{props.brand}</div>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.articleImg}><img src={`/images/${props.image}`}/></div>
                <div className={styles.price}>€ {props.price}</div>
                {/* <button onClick={() => onClickviewWine(props.id)} >View Wine</button>     */}
            </div>
        </div>
    )
};