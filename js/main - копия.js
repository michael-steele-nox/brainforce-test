$(document).ready(function () {
	//	console.log("Сайт готов к манипуляции");

	var form = $(".form-popup");
	var formCloseButton = $(".button-close");
	var formPopupButton = $(".search-button");
	var formSubmitButton = $(".submit-button");
	var formAccesClose = $(".access-form__button-close");
	var formAccessModal = $(".access-form-popup");
	

	var navbarPanel = $(".navbar-panel");
	var navbarMenuButton = $(".navbar-menu__button");
	var navbarCloseButton = $(".navbar-menu__close-button");
	
//	formSubmitButton.on('click', toggleModal);
//	formAccesClose.on('click', toggleModal);

	formCloseButton.on('click', toggleForm);
	formPopupButton.on('click', toggleForm);
	navbarMenuButton.on('click', toggleNavbar);
	//	navbarPanel.on('click', toggleNavbar);
	navbarCloseButton.on('click', toggleNavbar);


	function toggleNavbar() {
		navbarPanel.toggleClass("navbar-open");
	};

	function toggleForm() {
		form.toggleClass("is-open");
	};
	
	function toggleModal() {
		formAccessModal.toggleClass("access-open");
	};
	
	// implement phone mask

	$("#phone").mask("+375(99)999-99-99");
	
	// implement validation form
	
	var validateForm = $(document).find('#loginFormPopUp')
	
	validateForm.validate({
		rules: {
			userName: {
				required: true,
				//				minlength: 2,
				//				maxlength: 16,
			},
			userPhone: {
				required: true,
				//				digits: true,
				minlength: 7,
				//				maxlength: 7,
			},
		},
		messages: {
			userName: {
				required: "Обязательное поле",
				//				minlength: "Имя должен быть минимум 2 символа",
				//				maxlength: "Максимальное число символов - 16",
			},
			userPhone: {
				required: "Обязательное поле",
				//				digits: "Введите цифры",
				minlength: "Введите 7 символов",
				//				maxlength: "Введите не более 7 символов",
			},
			
			
//			submitHandler: function (form) {
//				form.submit();
//			}
			
			submitHandler: function () {
//				formSubmitButton.on('click', toggleModal);
				formAccesClose.on('click', toggleModal);
			}
			
			
		}
	});
	
//	validateForm.submit();



});
