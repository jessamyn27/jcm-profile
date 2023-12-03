$(document).ready(function() {
    // Logo gif reload
    var imgurl = 'images/CM-logo.gif'+'?a='+Math.random();
    $('#logo img').attr('src',imgurl);
    $('#logo img').attr('alt','Caleb McTwigan');
    var imgurl = './images/CM-logo.gif'+'?a='+Math.random();
    $("#logo img").attr('src',imgurl);
    $("#logo img").attr('alt','Caleb McTwigan');
    
    // LIGHTBOX CODE FOR FULL IMAGE PREVIEWS
        Array.from(document.querySelectorAll('.lightbox')).forEach(element => {
            element.addEventListener('click', clickEvent => {
                activateLightbox(element.id);
            });
        })
            
        function activateLightbox(id) {
            $("#"+id+"-full")
            .removeClass("lightbox-target-inactive")
            .addClass("lightbox-target-active");
            console.log("#"+id+"-full");
        };
    
        $('.lightbox-close').on('click', function() {
            $('.lightbox-target')
            .removeClass('lightbox-target-active')
            .addClass('lightbox-target-inactive');
        });

    function animateBioBg() {
        $("#bio_bg").css({'animation': 'bio_bg forwards 1s .5s ease-out'});
    };
    animateBioBg()
}); 