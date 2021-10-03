import React from 'react';
import styles from './Sidesection_Block.module.css';
import Sidesection_Article from './Sidesection_Articles';

const sidesection_ArticleData = [
    {
        number: 1,
        title: 'Sponsor',
        body: '4 Mio. USD werden an FC Möllersdorf gespendet.'
    },
    {
        number: 2,
        title: 'Kolumne',
        body: 'Sind die Dinosauerier wirklich ausgestorben?'
    },
    {
        number: 3,
        title: 'Gastkommentar',
        body: 'Wie riechen die Ärsche von blonden Frauen wirklich?'
    },
    {
        number: 4,
        title: 'Liebesdrama',
        body: 'Trennung zwischen Kim Kardashian und Sebastian Kurz nun fix.'
    },
]

export default function Sidesection_Blocks(props){
    return(
        <div className={styles.container}>
            <div className={styles.title}>{props.title}</div>
            {
                sidesection_ArticleData.map(element => <Sidesection_Article
                number={element.number}
                title={element.title}
                body={element.body}
                />)
            }
        </div>
    )
}