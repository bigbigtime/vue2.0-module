/**
 * 验证邮箱
 */
 export function validatePhone(value){
    let reg = /^1[3456789]\d{9}$/; 
    return reg.test(value) ? true : false;
}
/**
 * 验证邮箱
 */
export function validateEmail(value){
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/; 
    return reg.test(value) ? true : false;
}
/**
 * 验证密码 6至20位的字母+数字 
 */
export function validatePass(value){
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    return reg.test(value) ? true : false;
}
