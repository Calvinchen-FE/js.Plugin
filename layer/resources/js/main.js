require.config({
	paths:{
		jquery:'jquery-1.11.3.min',
		jqueryUI:'http://apps.bdimg.com/libs/jqueryui/1.10.4/jquery-ui.min'
	}
})
require(['jquery','window'],function($,w){
	$("#a").click(function(){
		var win = new w.Window();
		win.alert({
			title:'提示',
			content:"welcome!",
			width:300,
			height:150,
			y:50,
			hasCloseBtn:true,
			text4AlertBtn:'OK',
			dragHandle:'.window_header',
			skinClassName: 'window_skin_a'
		});
		win.on('alert',function(){alert('you click the alert button');}).on('alert',function(){alert('you click the alert button');}).on('close',function(){alert('you click the close button');})
	});
	$("#b").click(function(){
		var win = new w.Window();
		win.confirm({
			title:'提示',
			content:'删除?',
			width:300,
			height:150,
			y:50,
			text4ConfirmBtn:'是',
			text4CancelBtn:'否',
			dragHandle:'.window_header'
		}).on('confirm',function(){
			alert('确定');
		}).on('cancel',function(){
			alert('取消');
		});
	});
	$("#c").click(function(){
		var win = new w.Window();
		win.prompt({
			title:'请输入你的名字',
			content:'我们将会为你保密你输入的信息',
			width:300,
			height:150,
			y:50,
			text4PromptBtn:'输入',
			text4CancelBtn:'取消',
			defaultValue4PromptInput:'aa',
			dragHandle:'.window_header',
			handler4PromptBtn:function(inputValue){
				alert(inputValue);
			},
			handle4CancelBtn: function(){
				alert('取消');
			}
		});
	});
	$("#d").click(function(){
		var win = new w.Window();
		win.common({
			title:'请输入你的名字',
			content:'我们将会为你保密你输入的信息',
			width:300,
			height:150,
			y:50,
			hasCloseBtn:true
		})
	});
})

		
