/*
* @Author: Administrator
* @Date:   2018-04-13 17:33:53
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-19 09:52:31
*/

import React from 'react';
import './index.css';

import CommonTitle from 'component/common-title/index.jsx';

////////////////////////////////
//test
// import CommentApp from '../../test/CommentApp.jsx';
import Test from '../../test/Test.jsx';

class User extends React.Component{
    render(){
        const {user} = this.props
        return (
            <div>
                <ul>
                    <li>姓名：{user.username}</li>
                    <li>年龄：{user.age}</li>
                    <li>性别：{user.gener}</li>
                </ul>
                <hr/>
            </div>);
    }
}

class Home extends React.Component {
    render() {
        return (
        	<div id="page-wrapper">
                <CommonTitle title="首页" />
                <div className="row">
                    <div className="col-md-12">
                        body content
                        <Test />
                    </div>
                </div>
        	</div>
        );
    }
}

export default Home;