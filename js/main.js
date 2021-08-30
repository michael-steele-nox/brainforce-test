$(document).ready(function () {
//	console.log("Сайт готов к манипуляции");
	
	var form = $(".form-popup");
	var formCloseButton = $(".button-close");
	var formPopupButton = $(".search-button");
	
	formCloseButton.on('click', toggleForm);
	formPopupButton.on('click', toggleForm);


	function toggleForm() {
		form.toggleClass("is-open");
	};
	
	$("#phone").mask("+375(99)999-99-99");
	
	
	
	
	
});