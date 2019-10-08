window.addEventListener('load',function(){
	var swiper = new Swiper('.swiper-container', {
    autoplay: {
	    delay: 1000,//1秒切换一次
	  },
  	pagination: {
        el: '.swiper-pagination',
         clickable :true,
      },
    });
})