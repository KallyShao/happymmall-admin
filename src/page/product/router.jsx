import React from 'react';
import {BrowserRouter as Router, Switch, Redirect, Route, Link} from 'react-router-dom';

//页面
import ProductList from 'page/product/index/index.jsx';
import ProductSave from 'page/product/index/save.jsx';
import ProductDetail from 'page/product/index/detail.jsx';

class ProductRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                   <Route path="/product/index" component={ProductList} />
                   <Route path="/product/save/:proId?" component={ProductSave} />
                   <Route path="/product/detail/:proId" component={ProductDetail} />
                   <Redirect exact from="/product" to="/product/index" />
                </Switch>
            </Router>
        );
    }
}

export default ProductRouter;