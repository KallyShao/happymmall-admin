/*
 * @Author: Administrator
 * @Date:   2018-03-24 15:29:18
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-03-24 16:10:09
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';


class A extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
				Component A
				<Switch>
					<Route exact path={`${this.props.match.path}`} render={(route) => {
						return (
							<div>当前组件是不带参数的A</div>
						);
					}} />
					<Route path={`${this.props.match.path}/:id`} render={(route) => {
						return (
							<div>当前组件是带参数的A， 参数是： {route.match.params.id}</div>
						);
					}} />
				</Switch>
			</div>);
	}
}
class B extends React.Component{
	constructor(){
		super();
	};
	render(){
		return (<div>Component B</div>);
	}
}
class Wrapper extends React.Component{
	constructor(){
		super();
	};
	render(){
		return (
			<div>
				<Link to="/a">跳到A</Link>
				<br />
				<Link to="/a/333">带参数的组件A</Link>
				<br />
				<Link to="/b">跳到B</Link>
				{this.props.children}
			</div>);
	}
}

ReactDOM.render(
	  <Router>
		  <Wrapper>
		  	<Route path="/a/:id" component={A}></Route>
		  	<Route path="/b" component={B}></Route>
		  </Wrapper>
	  </Router>,
  document.getElementById('app')
);