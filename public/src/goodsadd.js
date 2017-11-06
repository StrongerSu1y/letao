
define(['jquery' , 'template', './utils' , 'uploadify'], function($,tpl) {
    $('form').on('submit' ,function () {
        var _this = $(this);
        $.ajax({
            url:'/api/product/addProduct',
            type: 'post',
            success:function (info) {  
                if(info.success) {
                    location.href = '/goods_list.php';
                }
            }
        });
        return false;
    });

    //jquery插件 一般使用规律
    //$(DOM).插件方法(对象格式参数)
    $('#upfile').uploadify({
        // flash插件
        // 使用 flash 进行上传
        buttonText:'',
        width:'120',
        height:'120',
        fileObjName:'pic1',
        //自定义上传进度条
        itemTemplate:'<span></span>',
        swf : '/public/assets/uploadify/uploadify.swf',
        uploader:'/api/product/addProductPic',
        onUploadSuccess:function (file,data) {  
            var res = JSON.parse(data);

            $('.preview img').attr('src','http://localhost:3000' + res.picAddr);

            $('input[name="pic"]').val(res.picAddr);
        }
    });

    //品牌列表
    $.ajax({
        url:'/api/category/querySecondCategoryPaging',
        type:'get',
        datat:{page:1,pageSize:10},
        success:function (info) {
            var html = template('brands',info);

            $('.brand').html(html);
        }
    })
    
});