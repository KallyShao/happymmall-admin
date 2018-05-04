import React from 'react';
import './save.scss';

import CommonTitle from 'component/common-title/index.jsx';
import CategorySelector from './category-selector.jsx';
import FileUploader from 'util/file-upload/index.jsx';

import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

import Product from 'service/product-service.jsx';
const _product = new Product(); 

class ProductSave extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categoryId: 0,
            parentCateId: 0,
            subImages: []
        }
    }
    //品类选择器的变化
    handleCateSave(categoryId, parentCateId){
        this.setState({
            categoryId,
            parentCateId
        });
    }
    //图片上传成功
    handleUploadSuccess(res){
        let subImages = this.state.subImages;
        subImages.push(res);   //push()的返回值是数组的长度！！！
        this.setState({
            // subImages: [...this.state.subImages, res]
            subImages: subImages //如果用这种写法，必须先赋值再取值
        })
        console.log(this.state.subImages);
    }
    //图片上传失败
    handleUploadError(errMsg){
        _mm.errorTips(errMsg);
    }
    render() {
        return (
            <div>
                <div id="page-wrapper">
                    <CommonTitle title="添加商品" />
                    <div className="form-horizontal">
                        <div className="form-group">
                            <label className="col-md-2 control-label">商品名称</label>
                            <div className="col-md-5">
                                <input type="text" className="form-control" placeholder="请输入商品名称" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-2 control-label">商品描述</label>
                            <div className="col-md-5">
                                <input type="text" className="form-control" placeholder="请输入商品描述" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-2 control-label">所属分类</label>
                            <CategorySelector onCateChange = {(categoryId, parentCateId) => this.handleCateSave(categoryId, parentCateId)} />
                        {/*
                            这里用组件实现
                            <div className="col-md-5">
                                <select name="" className="form-control cate-select">
                                    <option value="">请选择一级分类</option>
                                </select>
                                <select name="" className="form-control cate-select">
                                    <option value="">请选择二级分类</option>
                                </select>
                            </div>
                        */}
                        </div>
                        <div className="form-group">
                            <label className="col-md-2 control-label">商品价格</label>
                            <div className="col-md-3">
                                <div className="input-group">
                                    <input type="number" className="form-control" placeholder="价格" />
                                    <span className="input-group-addon">元</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-2 control-label">商品库存</label>
                            <div className="col-md-3">
                                <div className="input-group">
                                    <input type="number" className="form-control" placeholder="库存" />
                                    <span className="input-group-addon">件</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-2 control-label">商品图片</label>
                            <div className="col-md-10">
                                {
                                    this.state.subImages.length 
                                    ? 
                                    this.state.subImages.map((img, index) => 
                                        (<div className="img-con" key={index}>
                                            <img src={img.url} alt=""/>
                                        </div>)
                                    )
                                    : 
                                    (<div>请上传图片</div>)
                                }
                            </div>
                            <div className="col-md-10">
                               <FileUploader onSuccess = {(res) => this.handleUploadSuccess(res)} 
                                             onError = {(errMsg) => this.handleUploadError(errMsg)}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-2 control-label">商品详情</label>
                            <div className="col-md-10">
                               detail
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-offset-2 col-md-5">
                                <button type="submit" className="btn btn-primary">提交</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductSave;