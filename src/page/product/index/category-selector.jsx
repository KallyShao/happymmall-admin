import React from 'react';
import './category-selector.scss';

import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
import Category from 'service/category-service.jsx';
const _category = new Category();


class CategorySelector extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstCateList: [],
            firstCateId: 0,
            secondCateList: [],
            secondCateId: 0
        }
    }
    componentDidMount(){
        this._loadFirstCateList();
    }
    //加载一级分类
    _loadFirstCateList(){
        _category.getCategoryList().then((res) => {
            this.setState({
                firstCateList: res
            });
        }, (errMsg) => {
            _mm.errorTips(errMsg);
        });
    }
    //加载二级分类
    _loadSecondCateList(){
        _category.getCategoryList(this.state.firstCateId).then((res) => {
            this.setState({
                secondCateList: res
            });
        }, (errMsg) => {
            _mm.errorTips(errMsg);
        });
    }
    //根据一级分类加载二级分类
    handleFirstCateChange(e){
        let newValue = e.target.value || 0;
        this.setState({
            firstCateId: newValue,
            secondCateId: 0,    //清空二级分类的数据
            secondCateList: []
        }, () => {
            this._loadSecondCateList();
            this._propsCategoryChange();
        });
    }
    handleSecondCateChange(e){
        let newValue = e.target.value || 0;
        this.setState({
            secondCateId: newValue
        }, () => {
            this._propsCategoryChange();
        })
    }
    //将品类id暴露出去，将选中结果传给父组件
    _propsCategoryChange(){
        //判断props里的函数是否存在
        let cateChangable = typeof this.props.onCateChange === 'function';
        //如果有二级品类，将一级品类和二级品类都传出去
        if(this.state.secondCateId){
            cateChangable && this.props.onCateChange(this.state.secondCateId, this.state.firstCateId);
        }
        //如果只有一级品类，传一级品类和父id：0
        else{
            cateChangable && this.props.onCateChange(this.state.firstCateId, 0);
        }
    }
    render() {
        let {firstCateList, secondCateList} = this.state;
        return (
            <div>
                <div className="col-md-5">
                    <select onChange={(e) => this.handleFirstCateChange(e)} className="form-control cate-select">
                        <option value="">请选择一级分类</option>
                        {
                            firstCateList.map((list, index) => <option value={list.id} key={index}>{list.name}</option>)
                        }
                    </select>
                    { this.state.secondCateList.length 
                        ? (<select onChange={(e) => this.handleSecondCateChange(e)} className="form-control cate-select">
                            <option value="">请选择二级分类</option>
                            {
                                secondCateList.map((list, index) => <option value={list.id} key={index}>{list.name}</option>)
                            }
                        </select>)
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default CategorySelector;