const carMakeInput = document.querySelector("#carMakeInput");
const carModelInput = document.querySelector("#carModelInput");
const carPriceFromInput = document.querySelector("#carPriceFromInput");
const carPriceToInput = document.querySelector("#carPriceToInput");
const carYearFromInput = document.querySelector("#carYearFromInput");
const carYearToInput = document.querySelector("#carYearToInput");
const carMilageFromInput = document.querySelector("#carMilageFromInput");
const carMilageToInput = document.querySelector("#carMilageToInput");
const carSearchForm = document.querySelector("#carSearchForm");

carSearchForm.addEventListener("submit", event => {
	event.preventDefault();
	console.log(carMakeInput.value);
	console.log(carModelInput.value);
	console.log(carPriceFromInput.value);
	console.log(carPriceToInput.value);
	console.log(carYearFromInput.value);
	console.log(carYearToInput.value);
	console.log(carMilageFromInput.value);
	console.log(carMilageToInput.value);
});
