
define(['jquery'],function ($) {
    $('form').on('submit', function () {
        var _this = $(this);
        $.ajax({
            url: '/api/employee/employeeLogin',
            type: 'post',
            data: _this.serialize(),
            success: function (info) {
                //失败
                if (info.error) {
                    return alert(info.message);
                }
                //成功
                location.href = '/';
            }
        });
        return false;
    })
})