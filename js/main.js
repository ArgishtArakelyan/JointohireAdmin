

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


$(document).on("click",".task-current .add_task >button",function() {
     $('.add_task .new_task').addClass('active');
     if ($(".add_task .new_task").hasClass("active")) {
        $(this).slideUp();
     }else{
        $(this).slideDown();
     }
}); 

$(document).on("click",".add_task .new_task .closeAddTask",function() {
    $(".task-current .add_task >button").show();
    $(".add_task .new_task").removeClass("active")
}); 

$(document).on("click","#addToDosModal .task-list .checkbox input",function() {
    //var taskItems = $(this).parent();
    var currentItems = $('ul.task-current');
    var completedItems = $('ul.task-completed');

 
    if ($(this).parent().parent().hasClass('item-checked')) {
        $(this).parent().parent().removeClass('item-checked').prependTo(currentItems).find('input[type="checkbox"]').prop('checked', false);
    }
    else {
        $(this).parent().parent().addClass('item-checked').prependTo(completedItems).find('input[type="checkbox"]').prop('checked', true);
    }

}); 


$(document).on("click","#addToDosModal .task-list li >span",function() {
    $('.ToDosAddTask').hide();
    $('.ToDosComments').show();
    $('.back_ToDosAddTask').show();

}); 

$(document).on("click",".back_ToDosAddTask",function() {
    $('.ToDosAddTask').show();
    $('.ToDosComments').hide();
    $(this).hide();
}); 




 
$( ".sortable-wrap ul" ).sortable({ 
    handle: '.sort_icon' ,
    axis: "y"
});


 
 

$('#dueDate').datepicker();