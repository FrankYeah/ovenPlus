$('.owl-carousel').owlCarousel({
    items:4,
    loop:true,
    merge:true,
    margin:10,
    autoWidth:true,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    dotsContainer: '.custom-dots',
    responsiveRefreshRate: 0,
    responsive: {
      0: {
        autoWidth: false
      },
      992: {
        autoWidth: false
      }
    }
});

var rotateItem = 1;

$('.two-left-button').click(function(){
    // if(rotateItem == 0){
    //     return
    // }
    // rotateItem--
    $(".owl-carousel").trigger('prev.owl.carousel')
})

$('.two-right-button').click(function(){
    // if(rotateItem == 2){
    //     return
    // }
    // rotateItem++
    $(".owl-carousel").trigger('next.owl.carousel')
})

