/**
 * l 为label
 * p 为 ？？
 * m 为 message
 * e 为 error
 * @type {Map<any, any>}
 */
const labeler = new Map(
  [
    ['l_us', '/2'], // index ------ start
    ['l_login', '登录'],
    ['l_join', '注册'],
    ['l_chat', '聊天'],
    ['l_diary', '日记'],
    ['l_store', '小店'],
    ['l_about_us', '关于我们'],
    ['l_logout', '退出'],

    ['l_username', '用户名'], // user ------- start
    ['l_password', '密码'],
    ['l_email', '邮箱'],
    ['l_phone_num', '手机号'],
    ['p_login_name', '请输入用户名/邮箱/手机号'],
    ['e_invalid_grant', '用户名或密码错误']
  ]
)

const Labeler = code => {
  const label = labeler.get(code)
  if (label) {
    return label
  } else {
    console.warn('you don\'t set the key of [' + code + '] a label, you need set it')
    return code
  }
}
export default Labeler
