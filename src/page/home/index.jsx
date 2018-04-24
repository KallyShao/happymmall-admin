/*
* @Author: Administrator
* @Date:   2018-04-13 17:33:53
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-19 09:52:31
*/

import React from 'react';
import './index.css';

import CommonTitle from 'component/common-title/index.jsx';

class Home extends React.Component {
    render() {
        return (
        	<div id="page-wrapper">
                <CommonTitle title="首页" />
                <div className="row">
                    <div className="col-md-12">
                        body content
                    </div>
                </div>
        	</div>
        );
    }
}

export default Home;