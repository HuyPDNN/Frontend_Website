//--------------jQuery-UI------------------------
//----------background------------------------

$(document).ready(function(){
    _tabs();
    _dialog();
    _accordion();
    _checkboxradio();
    _datepicker();
})
//Dialog
function _dialog(){
    $('#dialog').dialog();
}
//tabs
function _tabs() {
    $('#tabs' ).tabs();
};
//Accordion

function _accordion(){
    $('#accordion').accordion();
}

function _checkboxradio(){
    $('input').checkboxradio();
}

function _datepicker(){
    $('#datepicker').datepicker();
}
