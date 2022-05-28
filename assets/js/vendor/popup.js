function check_pop_ht() {
  var window_ht,
      pop_wrap_ht;

  window_ht = $(window).height();
  pop_cont_ht = $('.c-popupWrap').height();

  if (pop_cont_ht > window_ht) {
    $('.c-popupContainer').css({
      'height' : '100%'
    });
    enquire.register("screen and (min-width: 500px)", {
      match : function() {
        $('.c-popupContainer').perfectScrollbar();
      },
      unmatch : function() {
        $('.c-popupContainer').perfectScrollbar('destroy');
      }
    });
  }
  else {
    $('.c-popupContainer').css({
      'height' : 'auto'
    });
  }
}

// show popup "popOpen(id) or popOpen()"
var pop_default_id = "js-popup__default";

function popOpen(id) {
  $('.c-popupMask, .c-popupContainer, .js-popupClose').fadeIn();
  if (id == null || id == '') {
    $('#'+pop_default_id).fadeIn();
  }
  else {
    $('#'+pop_default_id).empty();
    $('#'+id).fadeIn();
  }
  check_pop_ht();
}

$(window).resize(function(){
  check_pop_ht();
});

// hide popup "popClose()"
function popClose() {
  setTimeout(function(){
    $('.c-popup').empty();    
  },300);
  $('.c-popupMask, .c-popupContainer, .c-popup').fadeOut();
}

$('.js-popupClose').click(function(){
  popClose();
});