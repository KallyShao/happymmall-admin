import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

import CommonTitle from 'component/common-title/index.jsx';
import TableList from 'util/table-list/index.jsx';

import MUtil from 'util/mm.jsx';
const _mm = new MUtil(); 

import Category from 'service/category-service.jsx';
const _category = new Category();

class CategoryList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list : [],
            parentCateId: this.props.match.params.categoryId || 0
        };
    }
    componentDidMount(){
        this.loadCateList();
    }
    loadCateList(parentCateId){
       _category.getCategoryList(parentCateId).then((res) => {
            this.setState(res);
        }, (errMsg) => {
            this.setState({
                list: []
            });
            _mm.errorTips(errMsg);
        });
    }
    handleUpdateName(categoryId, categoryName){

    }
    render(){
        let tableHeads = [
            {name: '品类ID'},
            {name: '品类名称'},
            {name: '操作'}
        ];
        return (
            <div id="page-wrapper">
                <CommonTitle title="品类列表" />
                <TableList tableHeads = {tableHeads}>
                    {
                        this.state.list.map((cate, index) => {
                            return (
                                    <tr key={index}>
                                        <td>{cate.id}</td>
                                        <td>{cate.name}</td>
                                        <td>
                                            <a className="oper" onClick = {(e) => this.handleUpdateName(cate.id, cate.name)}>修改名称</a>
                                            <span>查看其子品类</span>
                                        </td>
                                    </tr>
                                )
                            })
                    }
                </TableList>
            </div>
        );
    }
}

export default CategoryList;