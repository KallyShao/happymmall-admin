import React from 'react';

import CommonTitle from 'component/common-title/index.jsx';
import CategorySelector from './category-selector.jsx';

import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

import Product from 'service/product-service.jsx';
const _product = new Product(); 

class ProductSave extends React.Component {
    render() {
        return (
            <div>
                <div id="page-wrapper">
                    <CommonTitle title="添加商品" />
                    <form className="form-horizontal">
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
                            <CategorySelector />
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
                               xxx
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
                    </form>
                </div>
            </div>
        );
    }
}

export default ProductSave;