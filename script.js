


$(document).ready(function(){

    $("a").on('click', function(event) {
        if (this.hash !== "") {

        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){

                window.location.hash = hash;
        });
        } 
    });

    $(".dropdown").click(function()
    {

        if($(".title").is(':visible'))
        {
        $(".navigation_list").slideDown(500);
        $(".title").css("display","none"); 
        }

        else
        {
        $(".navigation_list").slideUp(1);
        $(".title").css("display","block");
        
        }
   
    });

    
});

/*$(".nav_link").click(function()
{
$(".navigation_list").slideUp(1);
$(".title").css("display","block");
$(".navigation_list").css("display","block");
    
   
});*/
