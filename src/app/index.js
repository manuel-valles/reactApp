// Import react and react-dom
var React = require('react');
var ReactDOM =  require('react-dom');

// Create component
var TodoComponent = React.createClass({
	render: function(){
		return(
			<div>
			<h1>Hello World!!</h1>
			<p>More than one line.</p>
			<p>{this.props.mssg}</p>
			<p>If that contains cheese, wow!!</p>
			<p><strong>Cheese name: </strong>{this.props.cheese.name}</p>
			<p><strong>Cheese smell factor: </strong>{this.props.cheese.smellFactor}</p>
			<p><strong>Cheese price: </strong>{this.props.cheese.price}</p>
			</div>
		);
	}
});

var myCheese = {name:'Camembert', smellFactor: 'Extreme pong', price:'3.50'};
// Put component into html page
ReactDOM.render(<TodoComponent mssg="I love pizza." cheese={myCheese}/>, document.getElementById('todo-wrapper'));
