// ie8适配需要
import 'jquery';
import 'matchmedia-polyfill';
// react
import React from "react";
import ReactDOM from "react-dom";
// ie8适配需要
import 'create-react-class';

/* 
 * 样式
 */
// 统一样式
import 'normalize.css';
// antd样式
import 'antd/dist/antd.css';
// 公共样式
import './style/index.less';


// iconfont
//import './static/iconfont/iconfont.css';

// 入口组件
import App from "./view/App"

ReactDOM.render(
    (
        <App/>
    ),
    document.getElementById("app")
);
