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

$('.owl-carousels').owlCarousel({
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



$('.six-two-left-button').click(function(){
  // if(rotateItem == 0){
  //     return
  // }
  // rotateItem--
  $(".owl-carousel").trigger('prev.owl.carousel')
})

$('.six-two-right-button').click(function(){
  // if(rotateItem == 2){
  //     return
  // }
  // rotateItem++
  $(".owl-carousel").trigger('next.owl.carousel')
})

$(window).load(function() {
  $("#container1").twentytwenty();
});

// 表單輸入

$(function() {
  $('#submitMailOne').on('click', function() {
    
    // 姓名
    var emailOne = $('#inputMailOne').val() || '未填寫';

    // post
    var data = {
      'emailAddress': emailOne
    };
    $.ajax({
      type: 'POST',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLScf00MUfvwuWPAG38Mgb-gp4n-cMCUEFmUGdAijbtqcC1pfng/formResponse',
      data: data,
      contentType: 'application/json',
      dataType: 'jsonp',
      complete: function() {
        alert('資料已送出！');
      }
    });
    
  });



  $('#submitMailFour').on('click', function() {
    
    // mail
    var emailOne = $('#inputMailFour').val() || '未填寫';

    var data = {
      'emailAddress': emailOne
    };
    $.ajax({
      type: 'POST',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLScf00MUfvwuWPAG38Mgb-gp4n-cMCUEFmUGdAijbtqcC1pfng/formResponse',
      data: data,
      contentType: 'application/json',
      dataType: 'jsonp',
      complete: function() {
        alert('資料已送出！');
      }
    });
    
  });



  $('#submitMailSix').on('click', function() {
    
    // 姓名
    var emailOne = $('#inputMailSix').val() || '未填寫';

    // post
    var data = {
      'emailAddress': emailOne
    };
    $.ajax({
      type: 'POST',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLScf00MUfvwuWPAG38Mgb-gp4n-cMCUEFmUGdAijbtqcC1pfng/formResponse',
      data: data,
      contentType: 'application/json',
      dataType: 'jsonp',
      complete: function() {
        alert('資料已送出！');
      }
    });
    
  });  

});

