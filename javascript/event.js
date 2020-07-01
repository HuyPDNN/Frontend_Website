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
