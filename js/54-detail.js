window.addEventListener('load',function(){
	var layout = document.querySelector('.layout');//获取放图片的容器
	var mask = document.querySelector('.mask');//放大镜
	var big = document.querySelector('.big');//大图显示区
	layout.addEventListener('mouseover',function(){
		/*鼠标移动时将放大镜和大图显示区展示出来*/
		mask.style.display='block';
		big.style.display='block';
	});
	/*鼠标离开，容器，也就是图片，隐藏放大镜和放大区域*/
	layout.addEventListener('mouseleave',display_none);
	function display_none(){
		mask.style.display='none';
		big.style.display='none';
	}
	
	/*鼠标在图片上移动时，重新定位放大镜的位置，以及显示放大镜中放大的图片区域*/
	layout.addEventListener('mousemove',function(e){
		/*获得鼠标在图片容器中的位置*/
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