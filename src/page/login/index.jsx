import React from 'react';
import './index.scss';

import MUtil from 'util/mm.jsx';
const _mm = new MUtil();    //重新定义

import User from 'service/user-service.jsx';
const _user = new User();

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || '/'
        };
    }

    // //用户名发生改变
    // onUsernameChange(e){
    //     this.setState({
    //         username: e.target.value
    //     });
    // }
    // //密码发生改变
    // onPasswordChange(e){
    //     this.setState({
    //         password: e.target.value
    //     });
    // }

    //将上面的2个函数合并为1个
    onInputChange(e){
        let inputValue = e.target.value,    //e.target表示对应dom元素，这里纸input
            inputName  = e.target.name;     //输入框的name
        this.setState({
            [inputName] : inputValue      //es6支持对象中Key值为一个变量，这里Key和value不会混乱是因为e.target来区别，取到的都是对应input里面的name & value
        });
    }
    //提交登录信息
    onSubmit(){
        _user.login({
            username: this.state.username,
            password: this.state.password
        })
        .then((res) => {
            // console.log(this.state.redirect);
            //?????redirect取不到
            this.props.history.push(this.state.redirect);
        }, (errMsg) => {
            _mm.errorTips(errMsg);
        });
    }
    render(){
        return (
            <div className="col-md-6 col-md-offset-3">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">欢迎登录 -- MMALL管理系统</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text" 
                                        name="username"
                                        className="form-control" 
                                        placeholder="用户名"
                                        onChange = {e => this.onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                        name="password"
                                        className="form-control" 
                                        placeholder="密码" 
                                        onChange = {e => this.onInputChange(e)}
                                />
                            </div>
                            <button className="btn btn-lg btn-primary btn-block"
                                    onClick = {e => this.onSubmit(e)}
                                    >登录</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;