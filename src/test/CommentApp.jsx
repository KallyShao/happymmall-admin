import React from 'react';
import './index.css';

import CommentInput from './CommentInput.jsx';
import CommentList from './CommentList.jsx';



class CommentApp extends React.Component{
	constructor(){
		super();
		this.state  = {
			userList: []
		}
	}
	handleSubmitComment(comment){
		console.log(comment);
		this.state.userList.push(comment);
		this.setState({
			userList: this.state.userList
		})
		
	}
	render(){
		const {userList} = this.state;
		return(
			<div className="wrapper">
				<CommentInput onSubmit = {this.handleSubmitComment.bind(this)} />
				<CommentList users = {userList} />
			</div>
		);
	}
}

export default CommentApp;