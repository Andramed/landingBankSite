let modalWindowDeposit = document.getElementById('deposit');
let modalWindowLoan = document.getElementById('loan');
let containerButton = document.querySelector('.mainSectionContainerButton');
let textProfitMonth = document.querySelector('.textProfitMonth'),
	textProfitAnual = document.querySelector('.textProfitAnual'),
	textProfitTotal = document.querySelector('.textProfitTotal'),
	textMonthlyPayment = document.querySelector('.textMonthlyPayment'),
	textTowardToReturn = document.querySelector('.totalToReturn');
class Deposit {
	constructor(typedeposit, currency, amount, terminDeposit) {
		this.typedeposit = typedeposit;
		this.currency = currency;
		this.amount = amount;
		this.terminDeposit = terminDeposit;
	}
	calculateMonthProffit () {
		return Math.floor(this.amount * ((10 / 100) / 12))
	}
	calculateAnualProffit() {
		return Math.floor( this.calculateMonthProffit() * 12);
	}
	calculateProfitByTermin () {
		let profit = this.calculateMonthProffit() * this.terminDeposit + this.amount;
		return Math.floor(profit);
	}
}
class Loan {
	constructor(typeLoan, currencyLoan, amountLoan, terminLoan){
		this.typeLoan = typeLoan;
		this.currencyLoan = currencyLoan;
		this.amountLoan = amountLoan;
		this.terminLoan = terminLoan;
	}
	calculateMontlyPayment() {
		return Math.floor((this.amountLoan / this.terminLoan) + ((4.6 / 100) / 12) * this.amountLoan)
	}
	totalToReturn () {
		let total = this.calculateMontlyPayment() * this.terminLoan
		return total
	}
}

//functionalitai pentu modalWindowLoan
modalWindowLoan.addEventListener('click', function(event) {
	let clickedElement = event.target;
	 let classClickedElement = clickedElement.classList.value;
	 let parentClass = clickedElement.parentNode;
	 
	 if (classClickedElement.indexOf('loan') >= 0) {
		closeWindow(parentClass);
 	 }  else if (classClickedElement.indexOf('Reset') >= 0) {
		resetLoan()
	 } else if(classClickedElement.indexOf('Calculate') >= 0) {
		calculateLoan();
	 }
})
const calculateLoan = () => {
	let typeLoan = document.querySelector('#depositType').value,
		currencyLoan = document.querySelector('#currencyLoan').value,
		amountLoan = Number(document.querySelector('.amountLoan').value),
		terminLoan = Number(document.querySelector('#terminLoan').value);
	let loanInfo = new Loan(typeLoan, currencyLoan, amountLoan, terminLoan)
	console.log(typeof loanInfo.terminLoan);
	let monthPayment = loanInfo.calculateMontlyPayment();
	let totalReturn = loanInfo.totalToReturn();
	textMonthlyPayment.textContent = `${monthPayment} ${loanInfo.currencyLoan}`;
	textTowardToReturn.textContent = `${totalReturn} ${loanInfo.currencyLoan}`;
}
const resetLoan = () => {
let formDeposit = giveElementByClass('form');
textMonthlyPayment.textContent = 0;
textTowardToReturn.textContent = 0;
formDeposit.reset();
}
//
// Modal Window Deposit functionality
modalWindowDeposit.addEventListener('click', function(event) {
	let clickedElement = event.target;
	 let classClickedElement = clickedElement.classList.value;
	 let parentClass = clickedElement.parentNode;
	 if (classClickedElement.indexOf('deposit') >= 0) {
		closeWindow(parentClass);
 	 } 
	 else if (classClickedElement.indexOf('Calculate') >=0) {
		calculateProfit();
	 } else if(classClickedElement.indexOf('reset') >= 0) {
		reset();
	 }
})
const calculateProfit = () => {
		let typedeposit = document.querySelector('#depositType').value,
			currency = document.querySelector('#currency').value,
			amount = Number(document.querySelector('.amount').value),
			termin = Number(document.querySelector('#termin').value);
		let depositInfo = new Deposit(typedeposit, currency, amount, termin)
		let monthProfit = depositInfo.calculateMonthProffit();
		let anualProfit = depositInfo.calculateAnualProffit();
		let terminProfit = depositInfo.calculateProfitByTermin();
		textProfitMonth.textContent = `${monthProfit} ${depositInfo.currency}`;
		textProfitAnual.textContent = `${anualProfit} ${depositInfo.currency}`;
		textProfitTotal.textContent = `${terminProfit} ${depositInfo.currency}`;
}
const reset = () => {
	let formDeposit = giveElementByClass('formDeposit');
	textProfitMonth.textContent = 0;
	textProfitAnual.textContent = 0;
	textProfitTotal.textContent = 0;
	formDeposit.reset();
}
// Deschidem modal Window
containerButton.addEventListener('click', function(event) {
	let clasClickedButton = event.target.classList.value;
	if (clasClickedButton === 'depositCalculator') {
		openModalWindow(clasClickedButton);
	} else {
		openModalWindow(clasClickedButton);
	}
	
})

//   functionalitati diferite
const addClass = (element, classYouWant) => {
	element.classList.add(classYouWant);
}
const removeClass = (element, clasYouWant) => {
	element.classList.remove(clasYouWant)
}
const giveElementById = (idElement) => {
	let element = document.querySelector(`#${idElement}`);
	return element
}
const giveElementByClass = (classElement) => {
	let element = document.querySelector(`.${classElement}`);
	return element
}
const closeWindow = (parentClass,) => {
	let window = giveElementById(parentClass.id);
	addClass(window, 'hidden');
}
const openModalWindow = (classClickedElement) => {
	let btn = giveElementByClass(classClickedElement);
	if (classClickedElement.indexOf('deposit') >=0) {
		let depositModalWindow = giveElementById('deposit');
		removeClass(depositModalWindow, 'hidden');
	} else {
		let loanModalWindow = giveElementById('loan');
		removeClass(loanModalWindow, 'hidden');
	}
}
// clipBordCopie Phone number
const copyToClipBoard = () => {
	const textToCopy = '+373600130477';
	navigator.clipboard.writeText(textToCopy).then(() => {
	  const notification = document.createElement('div');
	  notification.textContent = 'Number Copied';
	  notification.style.position = 'fixed';
	  notification.style.top = '10px';
	  notification.style.right = '10px';
	  notification.style.padding = '10px';
	  notification.style.backgroundColor = '#f1c40f';
	  document.body.appendChild(notification);
	  setTimeout(() => {
		notification.remove();
	  }, 2000);
	}).catch((err) => {
	  console.error('Nu s-a putut copia textul: ', err);
	});
}
document.querySelector('.phone').addEventListener('click', copyToClipBoard);



	
