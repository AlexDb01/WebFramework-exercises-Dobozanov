import React from 'react';
import styles from './Header.module.css';

export default function Header(){
    return(
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.brand}>Helsingin Sanomat</div>
                <div className={styles.topLinkContainer}>
                    <ul className={styles.topLinkList}>
                        <li><a href="#">Uutiset</a></li>
                        <li><a href="#">Lehdet</a></li>
                        <li><a href="#">Tilaa</a></li>
                        <li><a href="#">Kirjaudu</a></li>
                        <li><a href="#">Hae</a></li>
                    </ul>
                    <button className={styles.menu}>Valikko</button>
                </div>
            </div>
            <div className={styles.bottomContainer}>
            <div className={styles.bottomLinkContainer}>
                    <ul className={styles.bottomLinkList}>
                        <li><a href="#">Etusivu</a></li>
                        <li><a href="#">HS Visio</a></li>
                        <li><a href="#">Luetuimmat</a></li>
                        <li><a href="#">Uusimmat</a></li>
                        <li><a href="#">Politiikka</a></li>
                        <li><a href="#">Kaupunki</a></li>
                        <li><a href="#">Kulttuuri</a></li>
                        <li><a href="#">Tiede</a></li>
                        <li><a href="#">Hyvinvointi</a></li>
                        <li><a href="#">Ruoka</a></li>
                        <li><a href="#">Nyt</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}