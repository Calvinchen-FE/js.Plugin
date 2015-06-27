requirejs.config({
	paths:{
		jquery: 'jquery-1.11.3.min'
	}
});

requirejs(['jquery','backtop'],function($,backtop){

	$("#backTop").backTop({
		mode:'move'
	});

/*	new backtop.BackTop($('#backTop'),{
		mode:'move',
		speed:1000,
		pos:100
	})*/

	/*var scroll = new scrollto.ScrollTo({
			dest:0,
			speed:4000
	});

	$("#backTop").on('click',$.proxy(scroll.move,scroll));*/
/*	$(window).on('scroll',function(){
		checkPosition($(window).height());
	});

	checkPosition($(window).height());

	function move(){
		$('html,body').animate({
			scrollTop:0
		},800);
	}

	function go(){
		$('html,body').scrollTop(0);
	}

	function checkPosition(pos){
		if($(window).scrollTop() > pos){
			$("#backTop").fadeIn();
		}else{
			$("#backTop").fadeOut();
		}
	}*/
})