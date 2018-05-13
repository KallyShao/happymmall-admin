import React from 'react';
import { Link } from 'react-router-dom';

import CommonTitle from 'component/common-title/index.jsx';

import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

import Order from 'service/order-service.jsx';
const _order = new Order(); 

class OrderDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          orderNo: this.props.match.params.orderNo
        }
    }
    componentDidMount(){
        this.loadOrderDetail();
    }
    //加载订单详情
    loadOrderDetail(){
        _order.getOrderDetail({
          orderNo: this.state.orderNo
        }).then((res) => {
             console.log(res);
             }, (errMsg) => {
             _mm.errorTips(errMsg);
         });
    }


    render(){
        return (
            <div id="page-wrapper">
                <CommonTitle title="订单详情" />
               
               
            </div>
        );
    }
}

export default OrderDetail;