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

// 表單輸入1

$(function() {
  $('#submitMailOne').on('click', function() {
    $('.seven-flip-book-background').css('visibility', 'visible');
    // 姓名
    var emailOne = $('#inputMailOne').val() || '未填寫';

    // post
    var data = {
      'entry.239322164': emailOne
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

// 表單輸入2

  $('#submitMailFour').on('click', function() {
    $('.seven-flip-book-background').css('visibility', 'visible');
    // mail
    var emailOne = $('#inputMailFour').val() || '未填寫';

    var data = {
      'entry.239322164': emailOne
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

// 表單輸入3

  $('#submitMailSix').on('click', function() {
    $('.seven-flip-book-background').css('visibility', 'visible');
    // 姓名
    var emailOne = $('#inputMailSix').val() || '未填寫';

    // post
    var data = {
      'entry.239322164': emailOne
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

// 下載

$('#downloadPDF').on('click', function() {
  window.open('https://drive.google.com/open?id=1nsJdPHWhqDJ_Sjgiw0qv1OVKA-1zrcsU');
});


// 翻書

$('#flipBook').turn({gradients: true, acceleration: true});

  // 點選翻頁圖片，也要改下面數字
$('.seven-flip-book-inside').on('click', function(event) {
  if($("#flipBook").turn("page") % 2 == 0){
    $('#flipCurrentPage').text($("#flipBook").turn("page") + '-' + ($("#flipBook").turn("page")+1));
  }else{
    $('#flipCurrentPage').text(($("#flipBook").turn("page")-1) + '-' + $("#flipBook").turn("page"));
  }
  $('.seven-flip-book-progress-bar-inside').css('width', ($("#flipBook").turn("page")*4.55) + '%' );

  if($("#flipBook").turn("page") == 1){
    $('#flipCurrentPage').text('1');
    $('.seven-flip-book-progress-bar-inside').css('width', '4.55%');
  }
  if($("#flipBook").turn("page") == 22){
    $('#flipCurrentPage').text('22');
    $('.seven-flip-book-progress-bar-inside').css('width', '100%');
  }

  if($("#flipBook").turn("page") == 20){
    $('.seven-flip-book-progress-bar-inside').css('width', '95%');
  }

  event.stopPropagation();
})


// 上一頁
$('#flipPrevPage').on('click', function() {
  $("#flipBook").turn("previous");
  $('#flipCurrentPage').text( ($("#flipBook").turn("page")-1) + '-' + $("#flipBook").turn("page"));
  $('.seven-flip-book-progress-bar-inside').css('width', ($("#flipBook").turn("page")*4.55) + '%' );

  if($("#flipBook").turn("page") == 1){
    $('#flipCurrentPage').text('1');
    $('#flipCurrentPage').text('1');
    $('.seven-flip-book-progress-bar-inside').css('width', '4.55%');
  }

  event.stopPropagation();
})

// 下一頁
$('#flipNextvPage').on('click', function() {
  console.log($("#flipBook").turn("page"))
  $("#flipBook").turn("next");
  $('#flipCurrentPage').text($("#flipBook").turn("page") + '-' + ($("#flipBook").turn("page") +1 ));
  $('.seven-flip-book-progress-bar-inside').css('width', ($("#flipBook").turn("page")*4.55) + '%' );

  if($("#flipBook").turn("page") == 20){
    $('.seven-flip-book-progress-bar-inside').css('width', '95%');
  }

  if($("#flipBook").turn("page") == 22){
    $('#flipCurrentPage').text('22');
    $('.seven-flip-book-progress-bar-inside').css('width', '100%');
  }

  event.stopPropagation();
})

// 關閉視窗


$('#flipCancel').on('click', function(e) {
  $('.seven-flip-book-background').css('visibility', 'hidden');
})

$('#allFlipBook').on('click', function(event) {
  $('#allFlipBook').css('visibility', 'hidden');
  if($("#flipBook").turn("page") == 1){
    $('#flipCurrentPage').text('1');
  }
  if($("#flipBook").turn("page") == 22){
    $('#flipCurrentPage').text('22');
  }
})

