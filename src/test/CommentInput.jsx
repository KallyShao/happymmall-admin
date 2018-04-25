import React from 'react';

class CommentInput extends React.Component{
	constructor(){
		super();
		this.state = {
			username: '',
			content: ''
		}
	}
	changeUsername(e){
		this.setState({
			username: e.target.value
		})
	}
	changeContent(e){
		this.setState({
			content: e.target.value
		})
	}
	handleSubmit(){
		if(this.props.onSubmit){
			const {username, content} = this.state;
			this.props.onSubmit({username, content});
		}
	}
	render(){
		return(
			<div className='form-group comment-input'>
		        <div className='comment-field'>
		          	<span className='control-label comment-field-name'>用户名：</span>
		          	<div className='comment-field-input'>
		            	<input type="text" 
		            		   className="form-control" 
		            			value = {this.state.username} 
		            			onChange = {this.changeUsername.bind(this)}
		            			/>
		          	</div>
		        </div>
		        <div className='comment-field'>
		          	<span className='control-label comment-field-name'>评论内容：</span>
		          	<div className='comment-field-input'>
		            	<textarea className="form-control" 
		            			rows="10" 
		            			onChange = {this.changeContent.bind(this)}
		            			/>
		          	</div>
		        </div>
		        <div className='comment-field-button'>
		          	<button className="btn btn-primary"
		          			onClick = {this.handleSubmit.bind(this)}>发布</button>
		        </div>
      		</div>
		);
	}
}

export default CommentInput;