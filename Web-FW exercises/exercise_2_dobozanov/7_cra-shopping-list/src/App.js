import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
  }

  addItem = (value, quantity, unit) =>{
    return () =>{
      const itemIndex = this.state.items.findIndex(element =>{
        if(element.value === value){
          return true;
        }else{
          return false;
        }
      });
      if(itemIndex !== -1){
        let newItems = [...this.state.items];
        newItems[itemIndex].qty += quantity;
        this.setState({items: newItems});
      }else{
        this.setState({
         items: [...this.state.items,
        {
          if: this.state.items.length + 1,
          value: value,
          qty: quantity,
          unit: unit
        }
        ]
      })
      } 
    }
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={this.addItem('Carrots', 5, 'pcs')}>Add Carrots</button>
      <button onClick={this.addItem('Strawberries', 5, 'pcs')}>Add Strawberries</button>
      <button onClick={this.addItem('Yogurt', 2, 'x')}>Add Yogurt</button>
      <button onClick={this.addItem('Beer', 6, 'x')}>Add Beer</button>
    </div>
  }
}

export default App;