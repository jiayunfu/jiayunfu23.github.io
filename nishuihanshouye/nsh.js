
//登录
function Register(){
	this.btn = document.getElementById('btn');
	this.mima = document.getElementById('mima');
	this.tip = document.getElementById('tip');
	this.p = document.getElementById('p');


	this.reg=/^\w+@\w+\.[a-z]{2,3}(\.[a-z]{2})?$/;;
	this.reg1=/^\s(\d)|([a-z])|([^0-9a-z]){6,16}$/;

	this.mail();
	this.password();
}

Register.prototype = {
	mail : function(){
		var that = this;
		this.btn.onblur=function(){
			if(that.reg.test(that.btn.value)){
				that.tip.innerHTML="输入正确";
				that.p.style.display="none";
			}else{
				that.tip.innerHTML="输入有误";
				that.p.style.display="block";
			}
		}
	},
	password : function(){
		var that = this;
		this.mima.onblur=function(){
		if(that.mima.value==""){
			that.tip.innerHTML="请输入密码";
			that.p.style.display="block";
		}else if(that.mima.value.length<6){
			that.tip.innerHTML="密码太短";
			that.p.style.display="block";
		}else if(that.mima.value.length>16){
			that.tip.innerHTML="密码太长";
			that.p.style.display="block";
		}else{
			if(that.reg1.test(that.mima.value)){
				that.p.style.display="none";
			}else{
				that.tip.innerHTML="密码格式错误";
				that.p.style.display="block";
			}
		}
	}
	}
}
new Register();


	


//轮播图
function Breathe(job_nav,job_con,a,div){
		this.job_nav=document.getElementById(job_nav);
		this.job_con=document.getElementById(job_con);
	
		 
		this.aArr=this.job_nav.getElementsByTagName(a);
		this.divArr=this.job_con.getElementsByTagName(div);
		this.bindeDom();
		this.Step();
		this.dot();
  	}

  	Breathe.prototype = {
  		bindeDom : function(){
  			this.aArr[0].style.zIndex=10;
  			this.num=0;
  		},
  		 show : function(n){
	  		for(var i=0; i<this.aArr.length;i++){
	  			this.aArr[i].className="a"+[i+1];
	  			this.divArr[i].className="div"+[i+1];
	  		}
	  		this.aArr[n].className+=" mouseover"+[n+1];
	  		this.divArr[n].className+=" active";
	  	},
	  	autoStep : function (){
	  		this.num++;
	  		if(this.num>this.aArr.length-1){
	  			this.num=0;
	  		}
	  		this.show(this.num);
	  	},
	  	Step : function (){
	  		var that = this;
	  		this.timer=setInterval(function(){
	  			that.autoStep();
	  		},4000)
	  	},
	  	dot : function(){
	  			var that = this;
		  	for(var m=0; m<this.aArr.length; m++){
		  		this.aArr[m].onmouseover=function(){
		  			for(var n=0; n<that.aArr.length; n++){
		  				if(this==that.aArr[n]){
		  					that.num=n;
		  					that.show(that.num);
		  				}

		  			}
		  		}
		  	}
	  	}
  	}

  	
  	new Breathe("mdt","mdtyc","a","div");
  	new Breathe("occ","occyc","a","div");




