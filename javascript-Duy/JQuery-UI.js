//-----------------JQUERY UI-----------------------
$(document).ready(function () {

    //JQuery-UI Dialog
    thongbao();

    //JQuery-UI Tab
    tab();

    //JQuery ngày tháng
    ngay();
    
    //JQuery hiển thị nội dung thu gọn
    thugon();

});

//JQuery-UI Dialog-----thông báo hộp thoại
function thongbao() {
    $('.my-dialog').dialog({
        show: { effect: 'explode', duration: 1000 }
    });
}
//JQuery-UI Tab------------
function tab() {
    $("#tabs").tabs();
}
//JQuery Ngày Tháng
function ngay() {
     $('#date').datepicker();
}
//JQuery hiển thị nội dung thu gọn 
function thugon(){
    $( "#accordion" ).accordion();
}
