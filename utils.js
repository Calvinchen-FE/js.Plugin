var Utils = {
	trim:function(ele){
		return (ele.toString()).replace(/^\s+/,"").replace(/\s+$/,"");
	},
	isEmpty:function(ele){
		return (ele.toString()).length>0?false:true;
	},
	isLenGt:function(ele,num){  //文本长度大于某个数
		if(isNaN(num)){return;}
		return (ele.toString()).length>num?true:false;
	},
	isLenGl:function(ele,num){  //文本长度小于某个数
		if(isNaN(num)){return;}
		return (ele.toString()).length<num?true:false;
	},
	isPhone:function(ele){
		return /^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[0-9])[0-9]{8}$/.test(ele.toString());
	},
	isEmail:function(ele){
		return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+\.[a-zA-Z0-9]+/.test(ele.toString());	
	},
	checkPwdStrong:function(ele){
		var modes = 0;
		if(/\d/.test(ele)){modes++;}
		if(/[a-z]/.test(ele)){modes++;}
		if(/[A-Z]/.test(ele)){modes++;}
		if(/\W/.test(ele)){modes++;}
		switch(modes){
			case 1:
				return "弱";
				break;
			case 2:
				return "中";
				break;
			case 3:
				return "强";
				break;
			default:
				return "非常好";
		}
	}
} 
