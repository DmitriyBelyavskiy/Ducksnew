document.getElementById("main__btn").onclick = function () {
	document.getElementById("duck").classList.toggle("_active");
	document.getElementById("bg").classList.toggle("_active");

};
document.getElementById("close__pop").onclick = function () {
	document.getElementById("duck").classList.toggle("_active");
	document.getElementById("bg").classList.toggle("_active");


};

// $('.js-form-submit').on('click', function () {
// 	var link = document.createElement('a');
// 	link.setAttribute('href', 'https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1s0_QwLRjyyKDPQ_2Pq5IgSDho40K27ba');
// 	link.setAttribute('download', 'uc?export=download&confirm=no_antivirus&id=1s0_QwLRjyyKDPQ_2Pq5IgSDho40K27ba');
// 	link.click();
// 	return false;
// });
$(function () {

			//Маска для номера телефона
			$('.input__tel').inputmask({
				mask: '+38 (999) 999-99-99',
				showMaskOnHover: true,
				inputmode: 'tel',
				onincomplete: function () {
					checkValue($(this));
				},
				oncomplete: function () {
					checkValue($(this));
				}
			});

				//Функция валидации номера телефона
				var checkValue = function (input) {
					var $th = $(input);
					var phone = $th.val(); //Введенное значение
					var isValid = Inputmask.isValid(phone, {
						mask: '+38 (999) 999-99-99'
					});
					 //Проверяем на валидность
					var $btn = $th.closest('.js-form').find('.js-form-submit'); //Ищем кнопку отправки формы
					var $error = $th.parent().find('.js-warning'); //Ищем ошибку

					if (!isValid) {
						//Если не валидно, то:
						$btn.prop('disabled', true); //Меняем атрибут disabled в значение true (делаем кнопку неактивной)
						$error.fadeIn(); //Показываем ошибку
					} else {
						$btn.prop('disabled', false); //Меняем атрибут disabled в значение false (делаем кнопку активной)
						$error.fadeOut(); //Скрываем ошибку
					}
				}

			});
$(document).ready(function() {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == ''){
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
			$('.js-form-submit').on('click', function () {
				var link = document.createElement('a');
				link.setAttribute('href', 'https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1s0_QwLRjyyKDPQ_2Pq5IgSDho40K27ba');
				link.setAttribute('download', 'uc?export=download&confirm=no_antivirus&id=1s0_QwLRjyyKDPQ_2Pq5IgSDho40K27ba');
				link.click();
				return false;
			});
		});
		return false;
	});
});

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
	var popup = $('.popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-thank-you').fadeOut();
	}
});
