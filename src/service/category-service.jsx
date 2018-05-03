import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

class Category{
    //获取一级分类列表
    getCategoryList(parentCategoryId){
        return _mm.request({
            type: 'post',
            url: '/manage/category/get_category.do',
            data: {
                categoryId : parentCategoryId || 0
            }
        })
    }
}
export default Category;