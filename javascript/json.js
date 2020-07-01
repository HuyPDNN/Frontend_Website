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