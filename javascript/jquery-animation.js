//Chờ toàn bộ nội dung tải xong
$(document).ready(function(e){
    SetupEvent();
    SetupEvent_slideDown();
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
