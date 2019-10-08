window.addEventListener('load',function(){
	//获取元素
	var focus=document.querySelector('.focus');
	var ul=focus.children[0];
	var ol=focus.children[1];
	//获取focus的宽度
	var width=focus.offsetWidth;
	//定时器自动播发图片
	var index = 0;
	var timer=setInterval(function(){
		index++;
		var translateX=-index*width;
		ul.style.transition='all 2s';
		ul.style.transform='translateX('+translateX+'px)';
	},3000);
	//监听过渡完成的事件
	ul.addEventListener('transitionend',function(){
		//无缝滚动
		if(index>=4){
			index=0;
			ul.style.transition='none';
			var translateX=-index*width;
			ul.style.transform='translateX('+translateX+'px)';
		}else if(index<0){
			index=3;
			ul.style.transition='none';
			var translateX=-index*width;
			ul.style.transform='translateX('+translateX+'px)';
		}
		//小圆点变化
		ol.querySelector('.current').classList.remove('current');
		ol.children[index].classList.add('current');
		
	});
	//手指滑动轮播图
	var startx=0;
	var movex=0;
	var flag=false;
	ul.addEventListener('touchstart',function(e){
		startx=e.targetTouches[0].pageX;
		clearInterval(timer);
	});
	ul.addEventListener('touchmove',function(e){
		//停止定时器
		movex=e.targetTouches[0].pageX-startx;
		var translateX=-index*width+movex;
		ul.style.transition='none';
		ul.style.transform='translateX('+translateX+'px)';
		flag=true;
		e.preventDefault();
	});
	ul.addEventListener('touchend',function(){
		if(flag){//手指移动才进行判断
			if(Math.abs(movex)>50){
				if(movex>0){
					//上一张
					console.log('next')
					index--;
				}else{//下一张
					index++;
					console.log('last');
				}
				var translateX=-index*width;
				ul.style.transition='all .2s';
				ul.style.transform='translateX('+translateX+'px)';
			}else{
				var translateX=-index*width;
				ul.style.transition='all .2s';
				ul.style.transform='translateX('+translateX+'px)';
			}
		}
		//手指离开重新开启自动轮播图
		clearInterval(timer);
		timer=setInterval(function(){
			index++;
			var translateX=-index*width;
			ul.style.transition='all 2s';
			ul.style.transform='translateX('+translateX+'px)';
		},3000);
	});
});
