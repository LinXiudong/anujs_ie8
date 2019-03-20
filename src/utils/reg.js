const RegExp = {
    // 匹配正整数
    regPositiveInt: /^[1-9]\d*$/,
    // 匹配大于等于0的数，最多允许保留两位小数
    regPositiveFloat2: /^(([1-9]\d*)|0)(\.\d{1,2})?$/,
    // 匹配国内11位手机号(由于会出现新号段，这里不对第二位进行校验)
    regPhone: /^1\d{10}$/,
    // 匹配邮箱
    regEmail: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+\.)+[A-Za-z\d]{2,4}$/
}

export default RegExp;
