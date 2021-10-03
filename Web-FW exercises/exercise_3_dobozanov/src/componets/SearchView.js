import React from 'react';
import styles from './SearchView.module.css';
import Article from './Article';

export default function SearchView(props){
    return(
        <div style={styles.container}>
            <div className={styles.grid}>
                {
                    props.items.map(item => <Article key={item.id} {...item}/>)
                }
            </div>
        </div>
    )
}