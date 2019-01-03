//ie8适配需要
import 'jquery';
import 'matchmedia-polyfill';
//引入react
import React from "react";
import ReactDOM from "react-dom";
//ie8适配需要
import 'create-react-class';
//引入antd样式
import 'antd/dist/antd.css';
//引入iconfont
//import './static/iconfont/iconfont.css';
//引入公共样式
import "./index.less";
//引入入口组件
import App from "./view/App"

ReactDOM.render(
    (
        <App/>
    ),
    document.getElementById("app")
);
