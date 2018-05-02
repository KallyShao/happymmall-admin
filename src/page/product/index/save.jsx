import React from 'react';

import CommonTitle from 'component/common-title/index.jsx';

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
                            <label className="col-sm-2 control-label">商品名称</label>
                            <div className="col-sm-5">
                                <input type="text" className="form-control" placeholder="请输入商品名称" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">商品描述</label>
                            <div className="col-sm-5">
                                <input type="text" className="form-control" placeholder="请输入商品描述" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">所属分类</label>
                            <div className="col-sm-5">
                                <select name="" id=""></select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-5">
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