$(document).ready(function(){
            document.getElementById("1-1").style.display = "none";
            document.getElementById("1-2").style.display = "none";
            document.getElementById("1-3").style.display = "block";
            
            
        $("#2-1").click(function(){
            document.getElementById("1-1").style.display = "block";
            document.getElementById("1-2").style.display = "none";
            document.getElementById("1-3").style.display = "none";
            

        });
        $("#2-2").click(function(){
            document.getElementById("1-1").style.display = "none";
            document.getElementById("1-2").style.display = "block";
            document.getElementById("1-3").style.display = "none";
        });
     $("#2-3").click(function(){
            document.getElementById("1-1").style.display = "none";
            document.getElementById("1-2").style.display = "none";
            document.getElementById("1-3").style.display = "block";
        });
    });

$('.switch').click(function()
{
    $(this).toggleClass("switchOn");
});

$('.switch2').click(function()
{
    $(this).toggleClass("switchOn2");
});
$('.left-text1').on('click',function(){
   $('.switch1').removeClass('switch1On') ;
    $('.switch1').removeClass('switch1On1') ;
    
    });
$('.cent-text1').on('click',function(){
   $('.switch1').addClass('switch1On') ;
    $('.switch1').removeClass('switch1On1') ;
    
    });
$('.right-text1').on('click',function(){
   $('.switch1').addClass('switch1On1') ;
    $('.switch1').removeClass('switch1On') ;
    
    });




                        


