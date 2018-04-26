import React    from 'react';
import {Link}   from 'react-router-dom';

import MUtil from 'util/mm.jsx';
const _mm = new MUtil();    //重新定义

class TopNav extends React.Component{
	constructor(props){
		super(props);
    this.state = {
      userInfo:  null,
      name: ''
    }
	}

  componentWillMount(){
    console.log(_mm.getStorage('username'));
    this.setState({
      userInfo: _mm.getStorage('username'),
      name: 'kally'
    })
  }
  componentDidMount(){
    console.log(this.state.userInfo);
    console.log(this.state.name);
  }
    //退出登录
    onLogout(){

    }
	render(){
		return (
			<div className="navbar navbar-default top-navbar">
	            <div className="navbar-header">
	                <Link className="navbar-brand" to="/"><b>HAPPY</b>MMALL</Link>
	            </div>
	            <ul className="nav navbar-top-links navbar-right">
	      			<li className="dropdown">
                      <a className="dropdown-toggle" href="javascript:;" aria-expanded="false">
                          <i className="fa fa-user fa-fw"></i>
                          <span>欢迎，{this.state.userInfo}</span>
                            <i className="fa fa-caret-down"></i>
                      </a>
                      	<ul className="dropdown-menu dropdown-user">
                            <li>
                          	    <a onClick={() => {this.onLogout()}}><i className="fa fa-sign-out fa-fw"></i>
                                    <span>退出登录</span>
                                </a>
                            </li>
                      	</ul>
                  	</li>
	            </ul>
	        </div>			
		);
	}
}

export default TopNav;