
// prompt("f");
$(document).ready(function(){
    
    $(".acv").hover(function(){
        $("nav").fadeIn("fast");
    });

    // $(".acv").click(function(){
    //     $("html, body").animate({
        //         scrollTop: $(
            //           'html, body').get(0).scrollHeight
            //     }, 2000);
            // });
            
            $("#iop").click(function(){
                $("#qty").fadeIn("fast");
                $("#qty").css({"display":"flex" , "justify-content" :"center" });
            });
            $('#rt').click(function(){
                $('#qty').fadeOut('fast');
            });
    $('#ghj').click(function(){
       
            $("html, body").animate({
                scrollTop: $('html, body').get(0).scrollHeight }, 2000);
       
        $('#tyu').show('fast', function (){
                $('#tyu').hover(function(){
                    $("#tyu").css({"cursor" : "pointer"});

                    $('#tyu').hide(450)
                });

        });
        
        // $('#tyu').hide(10000);
        
             
        });
        


     $('#pro').click(function(){
        $("html, body").animate({
            scrollTop: $('.box').get(0).scrollHeight }, 1000);
     }) ;  

    
});





// --------javascript code------------ 

function valid(){
    var name = document.getElementById('a').value ;
    var email = document.getElementById('e').value ;

    check_name =  /^([a-zA-Z ]){2,30}$/ ;
    check_mail = /^[a-z0-9._-]+@[a-z]+.[a-z]{2,5}$/i ;
    
    if(!check_name.test(name))
    {
       alert('you have entered a invalid name');
    }
    if(!check_mail.test(email))
    {
        alert('you have entered wrong email');
    }

    else{
        alert('thankyou for filling the form :) ') ; 
    }
























} 






