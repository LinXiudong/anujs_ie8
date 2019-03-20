const ROOT_PATH = '/apidemo';

let API = {
    a: {
        b: '/212121',
        c: '/2121'
    },
    d: {
        k: '123123122'
    },
    dd: '/3232',
    //参加团购
    ADD_GROUP_BUY: '/demo.do'
}

// 给url加上前缀
function addRootPath(obj){
    for(key in obj){
        let value = obj[key];
        if(Object.prototype.toString.call(value) === "[object Object]"){
            obj[key] = addRootPath(value);
        }else{
            obj[key] = ROOT_PATH + value;
        }
    }

    return obj;
}
API = addRootPath(API);

export default API;
