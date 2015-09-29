$(function(){

	$(".foodie-box").hover(function(){
		$(this).find(".foodie-show-box").hide();
		$(this).find(".foodie-content").show();
	}, function() {
		$(this).find(".foodie-content").hide();
		$(this).find(".foodie-show-box").show();
	})

	$(".task-box").hover(function(){
		$(this).find(".task-show-box").hide();
		$(this).find(".task-content").show();
	}, function() {
		$(this).find(".task-content").hide();
		$(this).find(".task-show-box").show();
	})

	$(".balance-box").hover(function(){
		$(this).find(".balance-show-box").hide();
		$(this).find(".balance-content").show();
	}, function() {
		$(this).find(".balance-content").hide();
		$(this).find(".balance-show-box").show();
	})
});