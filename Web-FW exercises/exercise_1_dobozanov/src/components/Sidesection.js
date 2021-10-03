import React from 'react';
import styles from './Sidesection.module.css';
import Sidesection_Blocks from './Sidesection_Blocks';

const sidesection_BlocksData = [
    {
        title: 'Meistgelesene'
    },
    {
        title: 'Das Neueste'
    },
    {
        title: 'Leitartikel'
    },
]
export default function Sidesection(){
    return(
        <div className={styles.container}>
        {
            sidesection_BlocksData.map(element=> <Sidesection_Blocks
            title={element.title}
            />)
        }
    </div>
    )
}
