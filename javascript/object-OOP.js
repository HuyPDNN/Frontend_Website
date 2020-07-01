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