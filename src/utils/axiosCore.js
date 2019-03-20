import axios from 'axios';
import { message } from 'antd';

const $http = axios.create({
    //当创建实例的时候配置默认配置
    xsrfCookieName: 'xsrf-token'
});

// 防止多次提交
let ajaxThrottleObj = {};

// 请求拦截器
$http.interceptors.request.use(function(config){
    // 判断url+data，若存在表示该请求还未结束，不发送新请求
    // 为防止字段过长，data只取前20个字段
    const urlData = config.url + config.data.substring(0, 20);
    if(ajaxThrottleObj.hasOwnProperty(urlData)){
        return;
    }else{
        ajaxThrottleObj[urlData] = true;
        // 500ms后，若对象中还存在该urlData(可能是由于请求失败，则删除)
        setTimeout(()=>{
            if(ajaxThrottleObj.hasOwnProperty(urlData)){
                delete ajaxThrottleObj[urlData];
            }
        }, 500)
    }
    

    //在发送请求之前做某事，比如加一个loading

    return config;
}, function(error){
    //请求错误时做些事
    message.info('请求出现错误，请重试');
    return Promise.reject(error);
});

// 响应拦截器
$http.interceptors.response.use(function (response) {
    // 请求结束后删除ajaxThrottleObj库中的urlData
    delete ajaxThrottleObj[response.config.url + response.config.data.substring(0, 20)];
    
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
    // 系统错误，比如500、404等
    message.info('出现错误，请重试');
    return Promise.reject({
        messageCode: 'sysError'
    });
});

export default $http;
