//Chờ toàn bộ nội dung tải xong
$(document).ready(function(e){
    var demoAnimation_animate = document.getElementById('animate');
    var demoAimation_stop= document.getElementById('image1');
    SetupEvent();
    SetupEvent_slideDown();
    chuyendong();
    demoAnimation_animate.onclick= chuyendong;
    Changeimage();
    // demoAimation_stop.onclick = Changeimage;

});

//slideDown

function SetupEvent_slideDown(){
    //SHOW
    $('#slidedown').click(function(){
        $('#image1').slideDown(1000);
    });

    //HIDE
    $('#slideup').click(function(){
        $('#image1').slideUp(1000);
    });
    //TOGGLE
    $('#slidetoggle').click(function(){
        $('#image1').slideToggle(1000);
    });


}


//show--hide--toggle
function SetupEvent(){
    //SHOW
    $('#show').click(function(){
        $('#image1').show(1000, function(){
            alert('show');
        });
    });

    //HIDE
    $('#hide').click(function(){
        $('#image1').hide(1000, function(){
            alert('hide');
        });
    });

    //TOGGLE
    $('#change').click(function(){
        $('#image1').toggle(1000);
    });


 }
//animate,,
 function chuyendong(){
    var _animate = $("#image1");
      _animate.animate({height: "100px" , opacity: "0.5"}, "1" );
      _animate.animate({height: "200px"});
}


var status =1;
function Changeimage(){
    $('#image1').stop(true);
    if(status ==1){
        status =2 ;
        SizeDown();
    }else{
        status = 1
        SizeUp();
    }
}

function SizeDown(){
    $('#image1').animate(
        {
        width: '100px',
        opacity: 0.2
        },
        3000,
        Changeimage
    );
}
function SizeUp(){
    $('#image1').animate(
        {
        width : '500px',
        opacity: 1
        },
        3000,
        Changeimage
    );
}
