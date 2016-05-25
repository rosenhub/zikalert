// Website JS

$(document).ready(function(){

// social icon & navigation logo hover effects
$(".social_icons_wrapper a, .meet_team_social_icons a, a.navigation_logo").fadeTo("fast", 1.0); 
$(".social_icons_wrapper a, .meet_team_social_icons a, a.navigation_logo").hover(function(){
	$(this).fadeTo("fast", 0.6); 
},function(){
	$(this).fadeTo("fast", 1.0); 
});


// Mobile navigation 
$('a.mobile_nav_icon').click(function() {
	$('.navigation_links').fadeToggle(150);
});

if ($(window).width() < 960) {
	$('.navigation_links').addClass('mobile_nav_wrapper');
}

$('.navigation_links.mobile_nav_wrapper a').click(function() {
	$('.navigation_links').hide();
});

});

// Header Animations

$(window).bind("load", function() {

setTimeout(function(){
$(".header_text_wrapper").show().addClass('animated fadeInDownBig');
}, 800);

});