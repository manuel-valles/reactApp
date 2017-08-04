// Import react and react-dom
var React = require('react');
var ReactDOM =  require('react-dom');

// Create component
var TodoComponent = React.createClass({
	render: function(){
		return(
			<div>
			<h1>Hello World!!</h1>
			<p>More than one line</p>
			</div>
		);
	}
});

// Put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
