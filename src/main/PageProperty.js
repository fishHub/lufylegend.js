/*
* PageProperty.js
**/
function trace(){
	if(!LGlobal.traceDebug)return;
	var t = document.getElementById("traceObject"),i;
	if(trace.arguments.length > 0 && t == null){
		t = document.createElement("div");
		t.id = "traceObject";
		t.style.position = "absolute";
		t.style.top = (LGlobal.height + 20) + "px";
		document.body.appendChild(t);
	}
	for(i=0; i < trace.arguments.length; i++){
		t.innerHTML=t.innerHTML+trace.arguments[i] + "<br />";
	}
}
function addChild(o){
	LGlobal.stage.addChild(o);
}
function removeChild(o){
	LGlobal.stage.removeChild(o);
}
//初始化函数，init(speed(canvas刷新间隔，单位毫秒),divid(canvas的父容器ID),width(canvas宽度),height(canvas高度),
//completeFunc(初始化完成后调用函数),type(当值为null时会在window.load事件之后执行，当值为LEvent.INIT则会在之后执行))
function init(s,c,w,h,f,t){
	LGlobal.speed = s;//设定全局canvas刷新时间间隔
	var _f = function (){
		//当程序设备为触摸设备并且屏幕为横屏并且屏幕宽度小于屏幕高度的情况下，执行横屏处理，否则执行竖屏处理
		if(LGlobal.canTouch && LGlobal.aspectRatio == LANDSCAPE && window.innerWidth < window.innerHeight){
			LGlobal.horizontalError();
		}else if(LGlobal.canTouch && LGlobal.aspectRatio == PORTRAIT && window.innerWidth > window.innerHeight){
			LGlobal.verticalError();
		}else{
			f();
		}
		LGlobal.startTimer = (new Date()).getTime();//记录旋转开始时间
	};
	if(t != null && t == LEvent.INIT){
		LGlobal.frameRate = setInterval(function(){LGlobal.onShow();}, s);
		LGlobal.setCanvas(c,w,h);
		_f();
	}else{
		LEvent.addEventListener(window,"load",function(){
			LGlobal.frameRate = setInterval(function(){LGlobal.onShow();}, s);
			LGlobal.setCanvas(c,w,h);
			_f();
		});
	}
}
function base(d,b,a){
	var p=null,o=d.constructor.prototype,h={};
	if(d.constructor.name == "Object"){
		console.warn( "When you use the extends. You must make a method like 'XX.prototype.xxx=function(){}'. but not 'XX.prototype={xxx:function(){}}'.");
	}
	for(p in o)h[p]=1;
	for(p in b.prototype){
		if(!h[p])o[p] = b.prototype[p];
		o[p][SUPER] = b.prototype;
	}
	b.apply(d,a);
}
function getTimer(){
	return (new Date()).getTime() - LGlobal.startTimer;
}
if (!Array.prototype.indexOf){
	Array.prototype.indexOf = function(elt){
		var len = this.length >>> 0;
		var from = Number(arguments[1]) || 0;
		from = (from < 0) ? Math.ceil(from) : Math.floor(from);
		if (from < 0)from += len;
		for (; from < len; from++){
			if (from in this && this[from] === elt)return from;
		}
		return -1;
	};
}