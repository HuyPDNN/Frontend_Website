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






