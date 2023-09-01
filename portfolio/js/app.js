$(document).ready(function(){
// slider1
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    dots:false,
    smartSpeed:1000,
    navText :  ['PREV' , 'NEXT'],
    responsive:{
        0:{
        //   nav:false, 
        },
        600:{
          nav:true, 
        },
        // 1000:{
        //     item:5
        // }
    }
})


});



$('#project-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    smartSpeed:1000,
    navText :['Prev' , 'Next'],
    responsive:{
        0:{
         
            items:1,
             margin:0,
        },
        600:{
            items:2,
        },
        1000:{
          items:2, 
          center:true,
        }
    }
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    items:1,
    smartSpeed: 800,
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
})
