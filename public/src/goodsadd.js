
define(['jquery' , './utils'], function(require, factory) {
    $('form').on('submit' ,function () {
        var _this = $(this);
        $.ajax({
            url:'/api/product/addProductPic',
            type: 'post',
            success:function (info) {  
                if(info.success) {
                    location.href = '/goods_list.php';
                }
            }
        });
        return false;
    })
    
});