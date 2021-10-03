import React from 'react';
import styles from './App.module.css';
import { v4 as uuidv4 } from 'uuid';
import data from './data.json';
import SearchView from './componets/SearchView';

class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state ={
      items: data.items,
      searchString: "",
    }
  }

searchArticle = (event) =>{
  this.setState({searchString: event.target.value})
}

  render()
  {
    return <div className={styles.mainContent}>
      <div className={styles.searchBar}>
        Search <input type="text" onChange={this.searchArticle} value={this.state.searchString}/>
      </div>
      <div className={styles.productView}>
      <SearchView
        items={this.state.items.filter((item) => item.name.toLowerCase().includes(this.state.searchString))}
      />
      </div>
    </div>   
  }
}

export default App;
