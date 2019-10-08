function animate(obj,target,callbak){
clearInterval(obj.timer);//清除以前的定时器
obj.timer=setInterval(function(){
	var step=(target-obj.offsetLeft)/10;
	step=step>0?Math.ceil(step):Math.floor(step);
	if(obj.offsetLeft==target){
		clearInterval(obj.timer);
		if(callbak){
			callbak();
		}
	}
//	console.log(1+(-1)==0);
	console.log('1:'+obj.style.left);
	console.log('1:'+obj.offsetLeft);
	obj.style.left=(obj.offsetLeft+step)+'px';
	console.log('2:'+(obj.offsetLeft+step));
	},100);
}