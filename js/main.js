$(document).ready(function () {

	let form = $(".form-popup");
	let formCloseButton = $(".button-close");
	let formPopupButton = $(".search-button");
	let formSubmitButton = $(".submit-button");
	let formAccesClose = $(".access-form__button-close");
	let formAccessModal = $(".access-form-popup");


	let navbarPanel = $(".navbar-panel");
	let navbarMenuButton = $(".navbar-menu__button");
	let navbarCloseButton = $(".navbar-menu__close-button");

//	formSubmitButton.on('click', openModal);
	formAccesClose.on('click', closeModal);

	formCloseButton.on('click', closeForm);
	formPopupButton.on('click', openForm);
	
	navbarMenuButton.on('click', toggleNavbar);
	navbarCloseButton.on('click', toggleNavbar);

	function toggleNavbar() {
		navbarPanel.toggleClass("navbar-open");
	};

	function openForm() {
		form.addClass("is-open");
	};
	function closeForm() {
		form.removeClass("is-open");
	};

	function openModal() {
		formAccessModal.addClass("access-open");
	};
	
	function closeModal() {
		formAccessModal.removeClass("access-open");
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
		},

		submitHandler: function () {
			closeForm();
			openModal();
		}
		
	});
	
});
