import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

class User{
	//用户登录
    login(userInfo){
        return _mm.request({
            type: 'post',
            url: '/manage/user/login.do',
            data: userInfo
        });
    }
    //表单验证
    checkLoginInfo(userInfo){
    	let username = $.trim(loginInfo.username);
		if(!username){
			return {
				status: false,
				msg: '用户名不能为空！'
			}
		}
    }
}
export default User;