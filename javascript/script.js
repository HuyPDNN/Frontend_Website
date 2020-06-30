//------------------DOM--DOM--DOM--DOM--DOM-------------------------------------
var obj= document.getElementById("hd");
    //JS DOM CONTENT--> READING
    var DOM_READING_CONTENT1 = obj.innerHTML;// vd: <b>hoc tap</b> --> hoc tap
    var DOM_READING_CONTENT2 = obj.outerHTML;// vd: <b>hoc tap</b> --> <b>hoc tap</b>
    //JS DOM CONTENT--> WRITING
    var DOM_WRITING = obj.innerHTML = 'HELLO';// thay đổi nội dung thành HELLO
    //JS DOM ATTRIBUTE --> READING
    var DOM_READING_ATTRIBUTE = obj.getAttribute('class');// gọi setAttribute class sẽ nhận được giá trị của class
    //JS DOM ATTRIBUTE --> WRITING
    var DOM_WRITING_ATTRIBUTE = obj.setAttribute('style','background-color:red');//thay đổi giá trị background-color= 'red' 
    //JS DOM CSS --> READING
    var DOM_READING_CSS = obj.style.backgroundColor;// lấy ra giá trị màu
    //JS DOM CSS --> WRITING
    var DOM_WRITING_CSS = obj.style.backgroundColor = 'yellow';//thay đổi giá trị màu hiện tại
    //JS DOM FORM VALUE --> READING
var textinput = document.getElementById('inputtext');
    var DOM_READING_VALUE = textinput.value;// lấy ra giá trị của thuộc tính value
    //JS DOM FORM VALUE --> WRITING(chỉ nên áp dụng với input text)
    var DOM_WRITING_VALUE = textinput.value='Xin Chào';

//---------OJECT- OOP--------OJECT- OOP-----------OJECT- OOP-------------OJECT- OOP---------------
    //Thực hiện các phép tính cơ bản(+-*/)
    function PhepTinh(No1, No2){
        this.A= No1;
        this.B= No2;
        this.CongAB = function(){
            return this.A + this.B;
        }
        this.TruAB = function(){
            return this.A - this.B;
        }
        this.NhanAB= function(){
            return this.A * this.B;
        }
        this.ChiaAB = function(){
            return this.A / this.B;
        }
    }
    var kq = new PhepTinh(20,7);
    var kqCong = kq.CongAB();
    var kqTru = kq.TruAB();
    var kqNhan = kq.NhanAB();
    var kqChia = kq.ChiaAB();
    
    //Thông tin học sinh- sinh viên
    function Student(_name, _age, _class ){
        this.NAME= _name;
        this.AGE = _age;
        this.CLASS= _class;
        this.FULL_INFOMATION = function(){
            return 'Tên: '+ this.NAME + ','+ this.AGE + ' tuổi, Lớp: ' + this.CLASS;
        }
    }
    var MSV_122 = new Student('Phạm Nhật Huy',21,'17T1');
    var MSV_111 = new Student('Nguyễn Văn Ròm',21,'17T1');
    
    var FullINF_111 = MSV_111.FULL_INFOMATION();
    var FullINF_122 = MSV_122.FULL_INFOMATION();

    //VD: OBJECT quản lí OBJECT (object giám đốc quản lí object trưởng phòng)
    function TruongPhong(name, age){
        this.NAME= name;
        this.AGE= age;
        this.HELLO = function(){
            alert('Chào sếp');
        }
    }
    function GiamDoc(name, age){
        this.Name = name;
        this.Age= age;
        this.TRUONG_PHONG_KI_THUAT =  new TruongPhong('Phạm Nhật Huy',21);
    }
    var GD = new GiamDoc('SẾP',40);
    GD.TRUONG_PHONG_KI_THUAT.HELLO();

//------EVENT-------EVENT--------EVENT------EVENT----EVENT-----EVENT-------EVENT-----
    //event onload
    function WelcomWhenFinishLoad(){
        alert('Tài liệu đã load xong');
        var obj= document.getElementById('inputSearch');
        //event onclick
        obj.onclick=InputSearch;
        // event onmouseover
        obj.onmouseover= SetBackgroundHeaderOver;
        // event onmouseout
        obj.onmouseout= SetBackgroundHeaderOut;
        
        
    }
    //event onclick
    function SetupEventForHeader(){
        var obj= document.getElementById('inputSearch');
        obj.onclick = InputSearch;
    }
    function InputSearch(){
        var obj = document.getElementById('inputSearch');
        var a = obj.innerHTML = (new Date()).toUTCString();


    }
    function SetBackgroundHeader(){
        var obj = document.getElementById('hd');
        obj.setAttribute('style','background-color:red');
        
    }
    function SetBackgroundHeaderOver(){
        var obj = document.getElementById('hd');
        obj.setAttribute('style','background-color:yellow');
        
    }
    function SetBackgroundHeaderOut(){
        var obj = document.getElementById('hd');
        obj.setAttribute('style','background-color:green');  
    }

//-------JSON---------JSON------------JSON-------------JSON-------------JSON-------------JSON-------
    //Tạo dữ liệu chuỗi JSON
    var str1 = '{"name":"Thu vien lap trinh", "age":3}';
    var obj = JSON.parse(str1);
    alert(obj.name);

    //Thay đổi giá trị của trường "name" trong chuỗi JSON
    var str2 = '{"name":"hihi", "age":3}';
    var obj = JSON.parse(str2);
    alert(obj.name);

    //Truy vấn dữ liệu xâu trong chuỗi JSON
    var str3 = '{"name":"Thu vien lap trinh", "age": 3 , "more_inf" :{"company": "SapotaCorp", "Address":"150 Duy Tan"}}';
    var obj = JSON.parse(str3);
    alert(obj.more_inf.company);

    //Truy vấn dữ liệu mảng trong chuỗi JSON 
    var str4 = '{"name":"Thu vien lap trinh", "age": 3 , "more_inf" : [ "SapotaCorp", {"City":"Da Nang", "Address":"150 Duy Tan"}]}';
    var obj = JSON.parse(str4);
    alert(obj.more_inf[1].City);

