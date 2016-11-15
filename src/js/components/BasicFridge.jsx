var React = require('react');
var $ = require('jquery');

var BasicFridge = React.createClass({

    
  
  
  getInitialState(){
     return {
        ingredients: [] 
     };
  },
  
  _apiCall: function() {
        $.ajax({
            url:'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=' + this.state.ingredients.toString(),
            type: 'GET', 
            data: {}, 
            dataType: 'json',
            success: function(data) { console.log((data)); },
            error: function(err) { alert(err); },
            beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "IOXxGwmjbcmshk5Fl9AKuHX5WCLdp1kZ21fjsneOpkbp8wAgkG"); // Enter here your Mashape key
            }
        });
    },
    
    // _apiCallAutoComplete: function() {
    //     $.ajax({
    //         url:'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/autocomplete?query=' + this.refs.userInput.value,
    //         type: 'GET', 
    //         data: {}, 
    //         dataType: 'json',
    //         success: function(data) { console.log((data)); },
    //         error: function(err) { alert(err); },
    //         beforeSend: function(xhr) {
    //         xhr.setRequestHeader("X-Mashape-Authorization", "IOXxGwmjbcmshk5Fl9AKuHX5WCLdp1kZ21fjsneOpkbp8wAgkG");
    //             }    
    //         });
        
    // },
    
    
    componentDidMount: function() {
        this._apiCall();
        console.log(this._apiCall());
        // this._apiCallAutoComplete();
        // console.log( this._apiCallAutoComplete());
        
    },
    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.ingredients != this.state.ingredients){
            this._apiCall();
        }
        // if(prevProps.refs.userInput.value != this.state.userInput.value){
        //     this._apiCallAutoComplete();
        // }
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
    //   var ingredientIndex = parseInt(event.target.value, 10);
      
       this.setState(state => {
           state.ingredients.splice(i, 1);
           return {
               ingredients: this.state.ingredients
           };
       });
   },
  
  searchRecipe(event){
      event.preventDefault();
     
  },
   
  render: function() {
    return (
        <form>
        <input onChange={this._apiCallAutoComplete} type="text" ref="userInput"></input>
        <button onClick={this._handleButtonClick}>Add Ingredient</button>
        <button onClick={this.searchRecipe}>Search for Recipes!</button>
            <ul>
                {this.state.ingredients.map((ingredient, i) => <button onClick={(evt) => this.deleteIngredient(i, evt)} key={i}>{ingredient}</button>)}
            </ul>
        </form>
    );
    }
});

module.exports = BasicFridge;