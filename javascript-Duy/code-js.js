// //khai bao bien glocal(toan cuc)
// var a=5;
// function tong(b,c){
//     //khai bao bien local(cuc bo)
//     var Tong=a+b+c;
//     return Tong;
// }
// alert(tong(5,10));

// //hỗ trợ xử lý chuỗi
// var str="HELLO"
// alert(str.length);


// var date = new Date();
// date.setDate(28);
// alert(date);


// var obj = document.getElementById("Menu");
// var ob = obj.innerHTML;
// alert(ob);

// function hello(){
//     alert("xin chao mung");
// }
// hello();

// function truongphong(name,age){
//     this.name=name;
//     this.age=age;
//     this.Hello=function(){
//         alert("xin chao");
//     }
// }
// function giamdoc(name,age){
//     this.name=name;
//     this.age=age;
//     this.phong  = new truongphong("Duy",20);
// }
// var gd = new giamdoc("Van Duy ",30);
// gd.phong.Hello();


//hướng đối tượng phép tính
function Pheptinh(a, b) {
    this.A = a;
    this.B = b;
    this.phepcong = function () {
        return a + b;
    }
    this.pheptru = function () {
        return a - b;
    }
    this.phepnhan = function () {
        return a * b;
    }
    this.phepchia = function () {
        return a / b;
    }
}

function thuchien() {
    var tinh = new Pheptinh(10, 5);

    var pc = tinh.phepcong();
    alert(pc);


    var pt = tinh.pheptru();
    alert(pt);

    var pn = tinh.phepnhan();
    alert(pn);

    var pc = tinh.phepchia();
    alert(pc);
}
/*--------------------------------------------------*/

//hiện thông báo có không 
function COKHONG(){
    if(confirm('Bạn có mua đồ hay không?')){
        alert('Chào mừng bạn đến trang web của chúng tôi');
    }
    else{
        alert('Xin mời bạn biến...')
    }
}
//hiện thông báo điền tên và nhập hoặc không
function TUOI(){
    if(result = prompt('Ban Ten La Gi?')){
        alert("Chao ban "+ result);
    }
    else{
        alert('Sao Ban Khong Nhap Ten!!')
    }
}

//sự kiện Event//
function WelCome() {
    var obj = document.getElementById("BT");  //--->khai báo đối tượng lấy id này
    // var obj2 = document.getElementById("BT");
    // obj.onclick = click;
    // obj.onmouseout=thuchien;
    // obj.onclick=date1; //--->sử dụng đối tượng vừa khai báo
    obj.onclick=hien;
    // thuchien(); // chạy hướng đối tượng phép tính
    // obj.onclick=doimau;
    // obj.onmouseout=date1;
    // COKHONG();
    TUOI();
    // alert("Xin Chao Quy Khach");

}

function click() {
    var obj = document.getElementById("BT");
    alert("Xin Chao");
}

function hien() {
   var Hien = document.getElementById("Menu");
   var HH = Hien.innerHTML;
   alert(HH);
}
//hiện ngày giwfo 
function date1(){
    var obj = document.getElementById("ma").innerHTML=Date();
}

// //đổi màu menu
// function doimau(){
//     var obj = document.getElementById("Menu");
//     var dm = obj.setAttribute("style","background-color:red");
// }
/*---------------------------------*/

//Làm việc với JSON
/* var str ='{ "name":"Nguyen Van Duy","Age":"21"}';
var obj = JSON.parse(str);
alert("Xin Chao"+" "+obj.name); */
// obj.name="Nhat Huy";
// var str_2 = JSON.stringify(obj);
// alert(str_2);
/*------------------------------------*/

//truy vấn dữ liệu xâu chuỗi mảng JSON
/* var str1 = '{ "name":"Nguyen Van Duy","Age":"21", "Moreinf":[ 123,"ALO",{"ten":"Nhat Huy","tuoi":18}]}';
var obj = JSON.parse(str1);
alert("Xin chao "+obj.Moreinf[2].ten); */

