
const tools = {
    // cookie操作
    /**
     * 增加cookie
     * @param key   {String}  新增cookie的key
     * @param value {String}  新增cookie的value值
     * @param millisec  {num}  新增cookie的有效期，单位ms
     */
    addCookie(key, value, millisec){
        if(millisec){
            //设置过期时间
            let newDate = new Date();
            newDate.setTime(+newDate + millisec); 
            document.cookie = key + "="+ value + "; PATH=/; EXPIRES=" + newDate.toGMTString(); 
        }else{
            //默认不设置过期时间
            document.cookie = key + '=' + value + '; PATH=/';
        }
    },
    /**
     * 获取cookie
     * @param key   {String}  需要获取的cookie的key
     * @return      {String}  获取的cookie的value值
     */
    getCookie(key){
        let tokenArr = document.cookie.split('; '),
            len = tokenArr.length;

        key += '';
        for(let i = 0; i < len; i++){
            let tokenValueArr = tokenArr[i].split('=');
            if(tokenValueArr[0] === key){
                return tokenValueArr[1];
            }
        }
    },
    /**
     * 删除cookie
     * @param key   {String}  需要删除的cookie的key
     */
    removeCookie(key){
        this.addCookie(key, 1, -1);
    },

    /**
     * 修改数字格式（千分位符+保留两位小数）
     * @param num   {Number}  数字
     * @return      {String}  千分位符+保留两位小数后的值，例："123,45.67"
     */
    numFormat(num = 0){
        const reg = /\d{1,3}(?=(\d{3})+$)/g;
        
        num = parseFloat(num).toFixed(2).split('.');
        let numInt = num[0],
            numDecimal = num[1];
        numInt = numInt.replace(reg, '$&,');
        num = numInt + '.' + numDecimal;

        return num;
    },

    /**
     * 深拷贝
     * @param obj   {Object/Array}  对象或数组
     * @return      {Object/Array}  深拷贝后的对象或数组
     */
    deepClone(obj){
        let objClone = Array.isArray(obj) ? [] : {};
        if(obj && typeof obj === "object"){
            for(key in obj){
                if(obj.hasOwnProperty(key)){
                    // 判断obj子元素是否为对象/数组，如果是，递归复制
                    if(obj[key] && typeof obj[key] === "object"){
                        objClone[key] = deepClone(obj[key]);
                    }else{  // 否则，简单复制
                        objClone[key] = obj[key];
                    }
                }
            }
        }
        return objClone;
    },
    /**
     * 函数节流
     * @param func    {Function}   要执行的函数
     * @param wait    {Number}     执行间隔
     * @return        {Function}
     */
    throttle(func, wait = 500) {
        let timer = null;
        let previous; // 上次执行时间
        return function() {
            // 保存函数调用时的上下文和参数，传递给 fn
            const context = this;
            const args = arguments;
            const now = +new Date();
            if (previous && now < previous + wait) { // 周期之中
                clearTimeout(timer);
                timer = setTimeout(function() {
                    previous = now;
                    func.apply(context, args);
                }, wait);
            } else {
                previous = now;
                func.apply(context, args);
            }
        };
    },
    /**
     * 函数去抖
     * @param  func     {Function}   实际要执行的函数
     * @param  delay    {Number}     延迟时间
     * @return          {Function}
     */
    debounce(fn, delay = 300) {
        let timer;
        return function () {
            // 保存函数调用时的上下文和参数，传递给func
            var context = this
            var args = arguments

            clearTimeout(timer)
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        }
    },
    /**
     * 特殊字符转译
     * @param  str  {String}    输入的字符串
     * @return      {String}    转译后的字符串     
     */
    htmlEncode(str = "") {
        if(str.length === 0){
            return "";
        }
        str = str
                .replace(/&/g, "&gt;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/ /g, "&nbsp;")
                .replace(/\'/g, "&#39;")
                .replace(/\"/g, "&quot;")
                .replace(/\n/g, "<br>"); 
        return str;
    },
    /**
     * 特殊字符反向转译
     * @param  str  {String}    输入的字符串
     * @return      {String}    反向转译后的字符串     
     */
    htmlDecode(str = "") {
        if(str.length === 0){
            return "";
        }
        str = str
                .replace(/&gt;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&nbsp;/g, " ")
                .replace(/&#39;/g, "\'")
                .replace(/&quot;/g, "\"")
                .replace(/<br>/g, "\n"); 
        return str; 
    }

}


export default tools;
