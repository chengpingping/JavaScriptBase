(function(window,document){
	var docE1=document.documentElement;
	var dpr=window.devicePixelRatio||1;//物理像素比
	function setBodyFontSize(){
		if(document.body){
			document.body.style.fontSize=(12*dpr)+'px';
		}else{
			//如果页面中没有body，将页面中的DOM元素加载完毕再去设置body的字体大小
			document.addEventListener('DOMContentLoaded',setBodyFontSize);
		}
	}
	setBodyFontSize();
	//set 1rem=viewWidth/10 设置HTML中元素文字的大小
	function setRemUnit(){
		var rem=docE1.clientWidth/10;
		docE1.style.fontSize=rem+'px';
	}
	setRemUnit();
	//reset rem unit on page resize
	window.addEventListener('resize',setRemUnit);
	//pageshow重新加载页面
	window.addEventListener('pageshow',function(e){
		if(e.persisted){//如果页面是从缓存页面取出来的，e.persisted就为true，这时也需要重新计算rem的大小
			setRemUnit();
		}
	});
	//detect 0.5px supports 有些浏览器不支持0.5像素的写法
	if(dpr>=2){
		var fakeBody=document.createElement('body');
		var testElement=document.createElement('div');
		testElement.style.border='.5px solid transparent';
		fakeBody.appendChild(testElement);
		docE1.appendChild(fakeBody);
		if(testElement.offsetHeight===1){
			docE1.classList.add('hairlines');
		}
		docE1.removeChild(fakeBody);
	}
}(window,document))
