import React from 'react';
import styles from './App.module.css';
import UserView from './components/UserView';
import AdminView from './components/AdminView';
import LoginView from './components/LoginView';
import Article from './components/Article';
import axios from 'axios';

class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state ={
      items: [],
      users: [],
      searchString: "",
      adminMode: false,
      registerSucces: false,
      loggedIn: false,
      //productView: false,
      currentUser: ""
    }
  }

  

  componentDidMount(){
    axios.get('http://localhost:4000/wine')
    .then(response =>{
      console.log(response);
      this.setState({
        items: response.data.items
      });
    })
    .catch(err => console.log(err));
  }

searchArticle = (event) =>{
  this.setState({searchString: event.target.value})
}

addNewProduct = (name, brand, region, price, image) => {
  axios.post('http://localhost:4000/wine',
    {
      name,
      brand,
      region,
      price,
      image
    }
  )
  .then(response =>{
    this.setState({
      items: response.data.items,
    })
  })
  .catch(err => console.log(err))
  window.location.reload();
}

deleteProduct = id =>{
  axios.delete('http://localhost:4000/wine/'+ id)
  .then(response => {
    this.setState({items: this.state.items.filter(item => item.id !== id)})
  })
  .catch(err => console(err));
}

addUser = (username, password, firstname, lastname, adress, town, age) => {
  axios.post('http://localhost:4000/users',
    {
      username,
      password,
      firstname,
      lastname,
      adress,
      town,
      age
    }
  )
  .then(response => {
    this.setState({
      user: response.data.users
      });
    })
    .catch(err => console.log(err))
    window.location.reload();
}

login = (username, password) => {
  axios.get('http://localhost:4000/login',
  {
    username,
    password
  }
  )
  .then(response => {
    this.setState({
      loggedIn: response,
      currentUser: username
    })
  })
}

viewWine = id =>{
  axios.get('http://localhost:4000/wine/'+ id)
  .then(response => 
    this.State({
      items: response.data.items,
      productView: true
    })
    ).catch(err => console.log(err))
}

  render()
  {
    let view = 
    <>
    <LoginView
    addUser={this.addUser}
    login ={this.login}
    />
    </>

    if(this.state.loggedIn){
      view =
      <> 
      <div className={styles.mainContent}>
        <h1>Logged in as {this.state.currentUser}</h1>
      <div className={styles.searchBar}>
        Search <input type="text" onChange={this.searchArticle} value={this.state.searchString}/>
      </div>
      <div className={styles.productView}>
      <UserView
        items={this.state.items.filter((item) => item.name.toLowerCase().includes(this.state.searchString))}
        viewWine={this.viewWine}
      />
      <button onClick={() => this.setState({adminMode: !this.state.adminMode})}>Admin mode</button>
      </div>
    </div>
    </> 
    }

    if(this.state.adminMode && this.state.loggedIn){
      view = <AdminView
              userMode={() => this.setState({adminMode: false})}
              addNewProduct={this.addNewProduct}
              items={this.state.items}
              deleteProduct={this.deleteProduct}
      />
    }

    /*if(this.state.productView){
      view = <Article
              viewWine={this.viewWine}
      />
    }*/

    return(
      <>
      {view}
      </>
    )  
  }
}

export default App;

