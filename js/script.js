/**
 * Created by kerwin on 2017/1/24.
 *
 */

$(function(){
    $('input[name="loginbtn"]').click(function() {
        var username = $('input[name="username"]');
        var password = $('input[name="password"]');
        var verify = $('input[name="verify"]');
        var tips = $('.tips');

        var _username = $.trim(username.val());
        var _password = $.trim(password.val());
        var _verify = $.trim(verify.val());

        if ('' == _username) {
            tips.text('请输入用户名!');
            username.focus();
            return;
        }
        if ('' == _password) {
            tips.text('请输入密码!');
            password.focus();
            return;
        }
        if ('' == _verify) {
            tips.text('请输入验证码!');
            verify.focus();
            return;
        }
        tips.text('登录成功，请稍候！')
    });
});



























































