import React from 'react';
import styles from './App.module.css'
import Header from './components/Header';
import Notifications from './components/Notifications';
import Mainsection from './components/Mainsection';
import SideSection from './components/Sidesection';

function App() {

  

  return (
    <div>
      <div>
      <Header/>
      <Notifications/>
      </div>
      <div className={styles.mainContent}>
      <Mainsection/>
      <SideSection/>
      </div>
    </div>
  );
}

export default App;
