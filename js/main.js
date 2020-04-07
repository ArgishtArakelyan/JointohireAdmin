

$(window).resize(function(){
	if ($(window).width() <= 992) {  
		$('.navbar-default.sidebar').addClass('sidebar_small');
		$('.hide_menu img').attr('src','../img/ic_menu_show.png');
	} else{
		$('.navbar-default.sidebar').removeClass('sidebar_small');
		$('.hide_menu img').attr('src','../img/ic_menu_hide.png');
	}
});




$('.drop-t-open').on('click', function(e) {
    $('.drop-t-open').not(this).removeClass('open');
    $(this).toggleClass('open');
    e.stopPropagation(); 
});

$('.dropdown-wrap').on('click', function(e) {
     e.stopPropagation(); 
});
 
$('html').click(function() {
    $('.drop-t-open').removeClass('open');
});

$(document).on("click",".hide_menu",function() {
 	$('.navbar-default.sidebar').toggleClass('sidebar_small');

 	if ($(".navbar-default.sidebar").hasClass("sidebar_small")) {
 		$('.hide_menu img').attr('src','../img/ic_menu_show.png');
 	}else{
 		$('.hide_menu img').attr('src','../img/ic_menu_hide.png');
 	}
}); 

$(document).on("click",".all_notes",function() {
    $('.all_notes_popup').fadeIn();
    $('body').addClass('hidden-b');
});

$(document).on("click",".close-popup",function() {
    $('.popup').fadeOut();
    $('body').removeClass('hidden-b');
}); 


 
    $( ".sortable-wrap ul" ).sortable({ 
        handle: '.sort_icon' ,
        axis: "y"
    });
 