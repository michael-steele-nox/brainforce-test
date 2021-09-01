$(document).ready(function () {
//	console.log("Сайт готов к манипуляции");
	
	
	
	var form = $(".form-popup");
	var formCloseButton = $(".button-close");
	var formPopupButton = $(".search-button");
	
	var navbarPanel = $(".navbar-panel");
	var navbarMenuButton = $(".navbar-menu__button");
	var navbarCloseButton = $(".navbar-menu__close-button");
	
	
	formCloseButton.on('click', toggleForm);
	formPopupButton.on('click', toggleForm);
	navbarMenuButton.on('click', toggleNavbar);
//	navbarPanel.on('click', toggleNavbar);
	navbarCloseButton.on('click', toggleNavbar);
	
	function toggleForm() {
		form.toggleClass("is-open");
	};
	
	function toggleNavbar() {
		navbarPanel.toggleClass("navbar-open");
	};
	
	
	// implement phone mask
	
	$("#phone").mask("+375(99)999-99-99");
	
	

	
	
	
});