$(document).ready(function() {
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px;'
    });
    
    /*Scroll on buttons*/ 
    $('.js--scroll-to-plans').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000); 
    });
    $('.js--scroll-to-start').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-features ').offset().top},1000); 
    });
    
    
     /* Navigation scroll */
    
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* Animation on scroll */
   $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animated fadeIn');
   }, {
       offset: '50%'
   });
    
    $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated fadeInUp');
   }, {
       offset: '50%'
   });
    
    $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animated fadeIn');
   }, {
       offset: '50%'
   });
    
    $('.js--wp-4').waypoint(function(direction) {
       $('.js--wp-4').addClass('animated pulse');
   }, {
       offset: '50%'
   });
    
    /* Mobile Navigation*/

    $('.js--nav-icon').click(function() {

        var nav = $('.js-main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
            $(".js--main-nav").show();

        }
        else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
            $(".js--main-nav").hide();
        }
    });
    
 
    window.onresize = function(){
        if (window.innerWidth > 767)
        {
            $(".js--main-nav").show();
        }
        else if (window.innerWidth <= 767)
        {
            $(".js--main-nav").hide();
        }
    }  
    

    /* Maps */
    
    var map = new GMaps({
      el: '.map',
      lat: -12.043333,
      lng: -77.000011,
        zoom: 12
    });
    
    map.addMarker({
      lat: -12.043333,
      lng: -77.028333,
      title: 'Lima',
      infoWindow: {
          content: '<p>Our Headquarter</p>'
        }
    });
    
    
});