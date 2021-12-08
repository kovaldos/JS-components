"use strict";
document.addEventListener("DOMContentLoaded", () => {
	/**
	* Функция возвращает правильный падеж слова "рубль"
	* в зависимости от введённой суммы
	* @param {number} num число, введенное пользователем
	* @returns {string} слово "рубль" в верном падеже
	*/
	function getRoubleCases(num) {
		const beforeLastDigit = getDigitBeforeLastDigit(num);
		if (beforeLastDigit == 1) {
			return "рублей"
		}
		num = String(num);
		const lastDigit = Number(num.charAt(num.length - 1));
		switch (lastDigit) {
			case 0:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
				return "рублей";
			case 1:
				return "рубль";
			case 2:
			case 3:
			case 4:
				return "рубля";
		}
	};

	/**
	 * Функция возвращает предпоследнюю цифру числа, если она есть, иначе null
	 * @param {number} num 
	 * @returns {(number | null)}
	 */
	function getDigitBeforeLastDigit(num) {
		num = String(num);
		const digit = num.charAt(num.length - 2);
		if (digit !== "") {
			return Number(digit);
		}
		return null
	}
	/**
	 * Данные элементы приведены для примера.
	 * В реальном проект это может быть любой элемент с како-либо суммой
	 */
	const form = document.getElementById("form_01");
	const input = form.querySelector('input[type="number"]');
	form.addEventListener('submit', () => {
		let money = input.value;
		if (money) {
			let html = document.createElement('div');
			html.classList.add('message-success');
			html.style.width = "100%";
			html.style.height = "50px";
			form.appendChild(html);
			html.innerText = `Ваша сумма ${money} ${getRoubleCases(money)} успешно зачислена`;
		}
	})
});


