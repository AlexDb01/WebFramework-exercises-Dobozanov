import React from 'react';
import styles from './Mainsection.module.css';
import Mainsection_Article from './Mainsection_Article';

const mainsections_ArticleData = [
    {
        articleTopic: 'Absage',
        body: 'Live Konzert von AC/DC abgesagt.',
        topic: 'Musik',
        date: '29.09.2021'
    },
    {
        articleTopic: 'Gewinn',
        body: 'Michael Schumacher gewinnt seine zweite Formula 1 WM.',
        topic: 'Sport',
        date: '28.09.2021'
    },
    {
        articleTopic: 'Skandal',
        body: 'Paris Hilton kickt ihren sohn.',
        topic: 'Promi News',
        date: '27.09.2021'
    }
];

export default function Mainsection(){
    return(
        <div className={styles.container}>
        {
            mainsections_ArticleData.map(element => <Mainsection_Article 
                articleTopic={element.articleTopic}
                body={element.body} 
                topic={element.topic}
                date={element.date}
                />)
        }
    </div>
    )

}