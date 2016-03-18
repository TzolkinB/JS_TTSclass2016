import React from 'react'
import ReactDOM from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import {Router, Route, hashHistory} from 'react-router'

ReactDOM.render((
	<Router history={hashHistory}>

		<Route path="/" component={App}/>
		<Router path="/about" component={About}/>
	</Router>
	), document.getElementById('app'))
