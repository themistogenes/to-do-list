//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type=text]").keypress(function(event){
	if(event.which === 13){
		//take new todo text from input
		var todoText = $(this).val();
		//empty the input field
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><icon class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

//fade out input using the plus icon
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});