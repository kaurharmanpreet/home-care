/*on scroll*/
$(window).scroll(function(){
	if( $(window).scrollTop())
    {
	    $('.navigation').addClass('on-scroll');
    }

    else{
	    $('.navigation').removeClass('on-scroll');
    }
 });

/*for toggle*/

$(document).ready(function(){
    $('.toggle').click(function(){
      $('.my-nav-bar').toggleClass('nav-toggle');
    });
});    



/*magnific popup*/

$('.image-box').magnificPopup({
  delegate:'a',
  type:'image',
  gallery:{
    enabled:true
  }
}); 