import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

class User{
    login(userInfo){
        return _mm.request({
            type: 'post',
            url: '/manage/user/login.do',
            data: userInfo,
        });
    }
}
export default User;