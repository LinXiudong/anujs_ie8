import axios from 'axios';
import { message } from 'antd';

const $http = axios.create({
    //当创建实例的时候配置默认配置
    xsrfCookieName: 'xsrf-token'
});

//添加请求拦截器
$http.interceptors.request.use(function(config){
    //在发送请求之前做某事，比如加一个loading

    return config;
},function(error){
    //请求错误时做些事
    message.info('出现错误，请重试');
    return Promise.reject(error);
});

//添加一个响应拦截器
$http.interceptors.response.use(function (response) {
    // 1.成功
    if (response.data.success) {
        return response.data.data;
    }else{
        message.info(response.data.msg);
        return Promise.reject(response.data.msg);
    }

    // 2.session过期
    /*if (!response.data.success) {
        createHashHistory().push('/login');

        // 定义一个messagecode在后面会用到
        return  Promise.reject({
            messageCode: 'timeout'
        })
    }*/

    // 3. 系统异常、网络异常
    /*if (response.data.success && response.data.messageCode === globalCode.busyCode) {
        Toast.hide();
        Toast.info(response.data.message, 1);
        return  Promise.reject({
            messageCode: 'netError'
        })
    }*/

    // 4.  其他失败，比如校验不通过等
    //return Promise.reject(response.data);
}, function () {
    //Toast.hide();
    // 4.系统错误，比如500、404等
    message.info('出现错误，请重试');
    return Promise.reject({
        messageCode: 'sysError'
    });
});

export default $http;
