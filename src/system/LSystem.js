var LSystem = {
	sv:0,
	//LSystem中sleep(value)方法,value为毫秒数
	sleep:function(s){
		var d = new Date();
		//当时间间隔小于传入的毫秒数的时候，一直执行wile循环。  
		while((new Date().getTime()-d.getTime()) < s){}
	},
	//LSystem中screen(value)方法,value为LStage.FULL_SCREEN(相当于LGlobal.FULL_SCREEN)
	//
	screen:function(a){
		LSystem.sv = a;
		if(LGlobal.stage){LGlobal.resize();}//当LGlobal舞台不为空的时候调用canvas的重绘函数。
	}
};