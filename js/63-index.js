window.addEventListener('load',function(){
	var focus=document.querySelector('.focus');
	var width=focus.offsetWidth;
	var arrow_l=document.querySelector('.arrow-l');
	var arrow_r=document.querySelector('.arrow-r');
	focus.addEventListener('mouseenter',function(){
//		console.log(arrow_r);
		arrow_l.style.display='block';
		arrow_r.style.display='block';
		clearInterval(timer);
		timer=null;
	});
	focus.addEventListener('mouseleave',function(){
		arrow_l.style.display='none';
		arrow_r.style.display='none';
		timer = setInterval(function(){
		arrow_r.click();
	},3000);
	});
	var ul=focus.querySelector('ul');
	var ol=document.querySelector('.circle');
	var num=0;
	var circle=0;
	for(var i=0;i<ul.children.length;i++){
		var li=document.createElement('li');
		ol.appendChild(li);
		li.setAttribute('index',i);
		li.addEventListener('click',function(){
			for(var i=0;i<ol.children.length;i++){
				ol.children[i].className='';
			}
			this.className='current';
			num=this.getAttribute('index');
			circle=this.getAttribute('index');
			animate(ul,-(this.getAttribute('index')*width));
		});
	}
	ol.children[0].className='current';
	var first=ul.children[0].cloneNode(true);
	ul.appendChild(first);
	var flag=true;
	arrow_r.addEventListener('click',function(){
		if(flag){
			flag=false;
			if(num==ul.children.length-1){
				num=0;
				ul.style.left=0+'px';
			}
			circle++;
			if(circle==ol.children.length){
				circle=0;
			}
			circleChange();
			num++;
			animate(ul,-num*width,function(){
				flag=true;
			});
		}
	});
	/*var last=ul.children[ul.children.length-2].cloneNode(true);
	ul.insertBefore(last,ul.children[0]);*/
	arrow_l.addEventListener('click',function(){
		if(flag){
			flag=false;
			if(num==0){
				num=ul.children.length-1;
				ul.style.left=-num*width+'px';
			}
			circle--;
			if(circle<0){
				circle=ol.children.length-1;
			}
			circleChange();
			num--;
			animate(ul,-num*width,function(){
				flag=true;
			});
		}
	});
	function circleChange(){
		for(var i=0;i<ol.children.length;i++){
			ol.children[i].className='';
		}
		ol.children[circle].className='current';
	}
	var timer = setInterval(function(){
		arrow_r.click();
	},3000);
});