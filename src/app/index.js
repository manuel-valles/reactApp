// Import react and react-dom
var React = require('react');
var ReactDOM =  require('react-dom');
// Import Router and Route with ES6

// OPTION A: IMPORTING THE DEPRECATED REACT-ROUTER
// import { Router, Route, browserHistory } from 'react-router';

// OPTION B: IMPORTING THE REACT-ROUTER-DOM
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

// CSS requires
require('./css/index.css');

// Set the Route
var App = React.createClass({
	render: function(){
		// OPTION A: WITH DEPRECATED REACT-ROUTER
		/*return(
            <Router history={browserHistory}>
                <Route path={"/"} component={TodoComponent}></Route>
                <Route path={"/about"} component={About}></Route>
            </Router>
        );*/
        // OPTION B: UP TO DATE
        return(
            <Router>
                    <Switch>
                      <Route exact={true} path={'/'} component={TodoComponent} />
                      <Route path={'/about'} component={About} />
                    </Switch>
            </Router>
        );
	}
});

// Create component
var TodoComponent = React.createClass({
	getInitialState: function(){
		return {
			todos:['wash up', 'eat some cheese', 'take a nap', 'buy flowers'],
			age: 30
		}
	},
	render: function(){
		// BackUp setState
		/*var ager = setTimeout(function(){
			this.setState({
				age: 35
			});
		}.bind(this), 5000);*/

		var todos = this.state.todos;
		todos = todos.map(function(item, index){
			return(
				// <li>{item +"!"}</li>
				<TodoItem item={item} key={index} onDelete={this.onDelete} />
			);
		}.bind(this));
		// BackUp
		/*return(
			<div>
				<h1>Hello World!!</h1>
				<p>More than one line.</p>
				<p>{this.props.mssg}</p>
				<p>If that contains cheese, wow!!</p>

				<p><strong>Cheese name: </strong>{this.props.cheese.name}</p>
				<p><strong>Cheese smell factor: </strong>{this.props.cheese.smellFactor}</p>
				<p><strong>Cheese price: </strong>{this.props.cheese.price}</p>
				<div id="todo-list">
					<p onClick={this.clicked}>The busiest people have the most leisure...</p>
					<p>{this.state.age}</p>
					<ul>
						<li>{this.state.todos[0]}</li>
						<li>{this.state.todos[1]}</li>
						<li>{this.state.todos[2]}</li>
					</ul>
					<hr/>
					<p onClick={this.clicked}>The busiest people have the most leisure...</p>
					<ul>{todos}</ul>
					<AddItem onAdd={this.onAdd}/>
				</div>
			</div>
		); */

		return(
            <div id="todo-list">
            	<Link to={'/about'}>About</Link>
                <p>The busiest people have the most leisure...</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd} />
            </div>
        );

	}, // render

	// Custom functions
	clicked: function(){
		console.log('you clicked me!');
	},

	onDelete: function(item){
		var updatedTodos = this.state.todos.filter(function(val, index){
			return item !== val;
		});
		this.setState({
			todos: updatedTodos
		});
	},

	onAdd: function(item){
		var updatedTodos = this.state.todos;
		updatedTodos.push(item);
		this.setState({
			todos: updatedTodos
		});
	},

	//lifecycle functions

	componentWillMount: function(){
		console.log('componentWillMount');
	},
	componentDidMount: function(){
		console.log('componentDidMount');
		// any grabbing of external data.
	},
	componentWillUpdate: function(){
		console.log('componentWillUpdate');
	}
});

var myCheese = {name:'Camembert', smellFactor: 'Extreme pong', price:'3.50'};
// Put component into html page
// ReactDOM.render(<TodoComponent mssg="I love pizza." cheese={myCheese}/>, document.getElementById('todo-wrapper'));
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
