// https://any86.github.io/any-rule/

/** 手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可 */
export const ruleMobile = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
/** email(支持中文邮箱) */
export const ruleEmail = /^[a-z0-9A-Z]+[-|a-z0-9A-Z._]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
/** 二代/二代身份证号 */
export const ruleIdcard =
  /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/;
/** 账号名校验，4到100位（字母，数字，下划线，减号） */
export const ruleAccountName = /^[a-zA-Z0-9_\-\\@\\.]{4,100}$/;
/** 网址 */
export const ruleWebsite =
  /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/;
