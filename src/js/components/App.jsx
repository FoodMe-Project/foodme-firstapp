var React = require('react');
var Link = require('react-router').Link;
var BasicFridge = require('./BasicFridge');


var App = React.createClass({
    render: function() {
        return (
            <div>
                <header>
                    <h1><Link to="/">FoodMe</Link></h1>
                    <hr/>
                </header>
                <main>
                    {this.props.children}
                </main>
                <hr/>
                <BasicFridge/>
            
               
            </div>
        );
    }
});

module.exports = App;