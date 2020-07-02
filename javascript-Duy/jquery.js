// $(document).holdReady(true/false);
//chờ tài liệu tải xong(giống onload)
$(document).ready(function () {
    //lệnh trong này chỉ chạy khi tài liệu tải xong
    var bt = document.getElementById('Hinh');
    bt.onmouseover = doihinh; 
    bt.onclick = doiclass;

    //JQuery điều khiển đọc nội dung html
    var html = document.getElementById("dochtml");
    html.onclick=Dochtml;

    //JQuery điều khiển đổi nội dung html
    var Html = document.getElementById("doihtml");
    Html.onclick=Doihtml;
    
    //JQuery điều khiển đọc nội dung text
    var text = document.getElementById('doctext');
    text.onclick=Doctext;

    //JQuery điều khiển đổi nội dung text
    var Text = document.getElementById('doitext');
    Text.onclick=Doitext;

    //JQuery chèn nội dung vào sau thẻ html
    var sau = document.getElementById('ndsau');
    sau.onclick=chensau;

    //JQuery chèn nội dung vào đầu thẻ html
    var dau = document.getElementById('nddau');
    dau.onclick=chendau;

    //JQuery chèn nội dung vào sau trong thẻ html
    var ndsautrong = document.getElementById('ndcuoitrong');
    ndsautrong.onclick=ndsau;

    //JQuery chèn nội dung vào sau trong thẻ html
    var nddautrong = document.getElementById('nddautrong');
    nddautrong.onclick=nddau;

    //JQuery ẩn nội dung
    var annd = document.getElementById('annd');
    annd.onclick=an;

    //JQuery hiện nội dung
    var hiennd = document.getElementById('hiennd');
    hiennd.onclick=hien;

    //JQuery hiệu ứng làm hiện và ẩn mờ dần
    var hienmo = document.getElementById('lammo');
    hienmo.onclick=lammo;

    //JQuery hiệu trượt slide
    var truot = document.getElementById('truot');
    truot.onclick=truotslide;

    //JQuery hiệu ứng chuyển động Animation
    var Chuyendong = document.getElementById('chuyendong');
    Chuyendong.onclick=chuyendong;

});

//JQuery Atttribute--đọc nội dung và gán thuộc tính----Đổi hình//////////////////
var HINH = 1;
function doihinh() {
    if (HINH == 1) {
        $('#anh').attr("src", "./image/map.jpg");
        HINH = 2;
    }
    else {
        $('#anh').attr("src", "./image/mayanh.jpg");
        HINH = 1;
    }
}

//JQuery và Class------đổi Class----làm to nhỏ hình ảnh//////
var hinh = 1 ;
function doiclass(){
    if(hinh==1){
        $('#anh').addClass('w2');
        hinh = 2;
    }
    else if(hinh == 2){
        $('#anh').addClass('w3')
        hinh = 3;
    } else if(hinh=3){
        $('#anh').removeClass('w2').removeClass('w3');
        hinh = 1;
    }

    //JQuery và CSS
    //đọc thuộc tính width trong css của id=anh
    var css = $('#anh').css('width');
    alert(css);
    /*-----------------------------------------*/
}

//JQuery điều khiển nội đọc dung html
function Dochtml(){
    var html = document.getElementById("dochtml");
    html = $("#nd").html();
    alert(html);
}
//JQuery điều khiển đổi nội dung html
function Doihtml(){
    var Html = document.getElementById("doihtml");
    Html = $("#nd").html('<b> Nội dung mới</b> <br/> <span> Nội dung span mới</span>')
}
//JQuery điều khiển đọc nội dung text
function Doctext(){
    var text = document.getElementById("doctext");
    text = $("#nd").text();
    alert(text);
}
//JQuery điều khiển đổi nội dung text
function Doitext(){
    var Text = document.getElementById("doitext");
    Text = $("#nd").text('Hello');
}
//JQuery chèn thêm nội dung vào sau thẻ html 
function chensau(){
    var sau = document.getElementById('ndsau');
    sau = $('#nd').append("Xin Chao") ;
}     
//JQuery chèn thêm nội dung vào sau thẻ html 
function chendau(){
    var dau = document.getElementById('nddau');
    dau = $('#nd').prepend("Chao Ban");
}   
//JQuery chèn thêm nội dung vào sau trong thẻ html 
function ndsau(){
    var ndsautrong = document.getElementById('ndcuoitrong');
    ndsautrong = $("<b>CHAO BAN</B> ").appendTo('#nd');
} 
//JQuery chèn thêm nội dung vào đầu trong thẻ html 
function nddau(){
    var nddautrong = document.getElementById('nddautrong');
    nddautrong = $('<B>CHAO BAN</B>').prependTo('#nd');
} 
//JQuery ẩn và hiện nội dung
function an(){
    var annd = document.getElementById('annd');
    annd = $('b').hide();
}
function hien(){
    var hiennd = document.getElementById('hiennd');
    hiennd = $('b').show(1000);
}
//JQuery hiệu ứng làm hiện và ẩn mờ dần
var kick = 1;
function lammo(){
    if(kick==1){
        $('.doihinh').fadeIn('slow');
        $('.tong').fadeIn(1000);
        kick = 2;
    }
    else {
        $('.doihinh').fadeOut('slow');
        $('.tong').fadeOut(1000);
        kick = 1;
    }
}
//JQuery hiệu ứng trượt lên và xuống (làm gọp)
function truotslide(){
    $('.doihinh').slideToggle('slow');
    $('.tong').slideToggle('2000');
}
//JQuery chuyển động animation 
function chuyendong(){
    var w1 = $('.w1');
    w1.animate({ height: '300px', opacity: '0.4'}, "slow");
    w1.animate({width: '300px', opacity: '0.8'}, "slow");
    w1.animate({height: '100px', opacity: '0.4'}, "slow");
    w1.animate({width: '100px', opacity: '0.8'}, "slow");
}
