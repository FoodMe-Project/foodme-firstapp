var React = require('react');

var BasicFridge = React.createClass({
  propTypes: {
    
  },
  getInitialState(){
     return {
        ingredients: [] 
     };
  },
  
   _handleButtonClick (event) {
       event.preventDefault();
       var userIngredientInput = this.refs.userInput.value;
       var ingredient = this.state.ingredients.concat(userIngredientInput);
       this.setState({
           
           ingredients: ingredient
       });
     
   },
   
   deleteIngredient(i, event) {
        console.log(i);
       event.preventDefault();
       var ingredientIndex = parseInt(event.target.value, 10);
      
       this.setState(state => {
           state.ingredients.splice(i, 1);
           return {
               ingredients: this.state.ingredients
           };
       });
   },
  
   
  render: function() {
    return (
        <form>
        <input type="text" ref="userInput"></input>
        <button onClick={this._handleButtonClick}>Add Ingredient</button>
            <ul>
                {this.state.ingredients.map((ingredient, i) => <button onClick={(evt) => this.deleteIngredient(i, evt)} key={i}>{ingredient}</button>)}
            </ul>
        </form>
    );
    }
});

module.exports = BasicFridge;