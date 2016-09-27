var React = require('react');
var ReactDOM = require('react-dom');

require('./style/style.scss');

class App extends React.Component {
	constructor(){
		super();
		this.state = {title: "Webpack"}
	}
	render() {
		return <div>
			<h1>My {this.state.title} App</h1>
			<p>This is Henriks app created with React, webpack and magic!</p>
		</div>
	}
}

ReactDOM.render(<App />, document.getElementById('react-container'));