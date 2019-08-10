$(document).ready(main)
var contador=0;
function main () {
$('#btn-menu').click(function (){
    if(contador==0){
        $('#content-menu').animate({left:'0'},385);
        contador=1;
        $('#span-icon-menu').hide();
        $('#span-icon-menu').removeClass('icon-menu');
        $('#span-icon-menu').addClass('icon-cross');
        $('#span-icon-menu').slideDown();
    }else{
        contador=0;
        $('#content-menu').animate({left:'-100%'});
        $('#span-icon-menu').hide();
        $('#span-icon-menu').removeClass('icon-cross');
        $('#span-icon-menu').addClass('icon-menu');
        $('#span-icon-menu').slideDown();
    }
});

}

