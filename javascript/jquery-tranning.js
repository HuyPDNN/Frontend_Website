// //--------jQUERY-----------jQUERY----------jQUERY----------jQUERY-----------jQUERY--------

//--------------------------jquery và attribute--------------------------------
//-->VD: Thay đổi ảnh
// Chờ tài liệu tải xong
$(document).ready(function(){
    //Lệnh trong đây chỉ chạy khi tài liệu đã tạo xong
    var btn_changeImage = document.getElementById('btnChangeImage-change');
    btn_changeImage.onclick = ChangeImage_change;

    //Lệnh trong đây chỉ chạy khi tài liệu đã tạo xong
    var btn = document.getElementById('btnChangeImage-size');
    var btn_size = document.getElementById('btnChangeImage_size');
    btn.onclick = ChangeImage_size;
    btn_size.onclick = ChangeImage_size;
});

var CurrentImage =1;

//Thay đổi ảnh
function ChangeImage_change(){
    if(CurrentImage==1){
        //Gán giá trị mới cho attribute
        $('#hinh').attr('src','./image/cao-bac-cuc-21.jpg');
        CurrentImage = 2;
    }else{
        //Gán giá trị mới cho attribute
        $('#hinh').attr('src','./image/a.jpg');
        CurrentImage = 1;
    }
    var obj_link = document.getElementById('hinh');
    obj_link.getAttribute('src');

    alert(obj_link);
}

//------------------------jquery và Class-------------------------------
//-->VD: Thay đổi kích thước hình ảnh 
//chờ tại liệu tải xong                                                                                                                       
// $(document).ready(function(){
        
// });
function ChangeImage_size(){
    if(CurrentImage==1){
        //Gán giá trị mới cho attribute
        $('#hinh').addClass('w2');
        CurrentImage = 2;
    }else if(CurrentImage==2){
        //Gán giá trị mới cho attribute
        $('#hinh').addClass('w3');
        CurrentImage = 3;
    }else{
        $('#hinh').removeClass('w2').removeClass('w3');
        CurrentImage =1;
    }
    //Đọc thuộc tính width hiện tại của #hình và alert
var current_css_width_value = $('#hinh').css('width');
alert(current_css_width_value);
}

//-----------------------------jquery và CSS-----------------------------
//
//chờ tại liệu tải xong                                                                                                                       

//------------------------jquery chèn nội dung---------------------------- 
$(document).ready(function(){
    //append: chèn thên nội dung vào cuối nội dung đang có
    document.getElementById('btn1').onclick = function(){
        $('#div1').append("<b>Nội dung in đậm mới</b>")
    } ;
    //prepend: chèn thêm nội dung vào đầu nội dung đang có
    document.getElementById('btn2').onclick = function(){
        $('#div1').prepend("<b>Nội dung in đậm mới</b>")
    } ;
    //appendTo: Chèn nội dung vào cuối nội dung của selector
    document.getElementById('btn3').onclick = function(){
        $("<b>Nội dung in đậm mới</b>").appendTo('#div1');
    } ;
    //prependTo: Chèn nội dung vào đầu nội dung của selector
    document.getElementById('btn4').onclick = function(){
        $("<b>Nội dung in đậm mới</b>").prependTo('#div1');
    } ;
})