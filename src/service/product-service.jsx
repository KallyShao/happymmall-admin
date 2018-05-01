import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

class Product{
   
    //获取商品列表
    getProductList(pageNum){
        return _mm.request({
            type: 'post',
            url: '/manage/product/list.do',
            data: {
                pageNum: pageNum
            }
        })
    }
    //商品上下架
    setSaleStatus(productInfo){
        return _mm.request({
            type: 'post',
            url: '/manage/product/set_sale_status.do',
            data: productInfo
        })
    }
    //商品搜索
    searchProduct(searchInfo){
        return _mm.request({
            type: 'post',
            url: '/manage/product/search.do',
            data: searchInfo
        })
    }
}
export default Product;