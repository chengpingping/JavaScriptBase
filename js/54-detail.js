window.addEventListener('load',function(){
	var layout = document.querySelector('.layout');
	var mask = document.querySelector('.mask');
	var big = document.querySelector('.big');
	layout.addEventListener('mouseover',function(){
		mask.style.display='block';
		big.style.display='block';
	});
	layout.addEventListener('mouseleave',display_none);
	function display_none(){
		mask.style.display='none';
		big.style.display='none';
	}
	layout.addEventListener('mousemove',function(e){
		var x=e.pageX-this.offsetLeft;
		var y=e.pageY-this.offsetTop;
//		console.log(x+','+y);
		maskH=mask.offsetHeight/2;
		maskW=mask.offsetWidth/2;
//		console.log(maskH==maskW);
		layoutH=layout.offsetHeight;
		layoutW=layout.offsetWidth;
		//mask移动的最大距离
		MaxX=layoutW-maskW;
		MaxY=layoutH-maskH;
		if(x<=maskH){
			x=maskH;
		}else if(x>=MaxX){
			x=MaxX;
		}
		if(y<=maskW){
			y=maskW;
		}else if(y>=MaxY){
			y=MaxY;
		}
		mask.style.left=x+'px';
		mask.style.top=y+'px';
		var big_img=document.querySelector('.big_img');
		//大图片移动的最大距离
		var bigMaxX=big_img.offsetWidth-big.offsetWidth;
		var bigMaxY=big_img.offsetHeight-big.offsetHeight;
		//大图移动距离=mask移动距离*大图最大移动距离/mask的最大移动距离
		var bigX=(x-maskW)*bigMaxX/(MaxX-maskW);
		var bigY=(y-maskH)*bigMaxY/(MaxY-maskW);
//		console.dir(bigX);
		big_img.style.left=-bigX+'px';
		big_img.style.top=-bigY+'px';
	});
})