let notification = document.querySelector('#notification'),
	btnPhone = document.querySelector('.phone'),
	btnDepositCalculator = document.querySelector('.depositCalculator'),
	btnLoanCalculator = document.querySelector('.loanCalculator'),
	modalWindowLoan = document.querySelector('.loan'),
	modalWindowDeposit = document.querySelector('#deposit'),
	btnCloseLoan = document.querySelector('#btnCloaseLoanWindow'),
	btnCloseDeposit = document.querySelector('#btnCloaseDepositWindow');

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

const addClass = (element, classYouWant) => {
	element.classList.add(classYouWant);
}
const removeClass = (element, clasYouWant) => {
	element.classList.remove(clasYouWant)
}
const claculate = () => {
	console.log(2+2);
}


btnLoanCalculator.addEventListener('click', function() {
	removeClass(modalWindowLoan, 'hidden');
})
btnCloseLoan.addEventListener('click', function() {
	addClass(modalWindowLoan, 'hidden')
});
btnDepositCalculator.addEventListener('click', function(){
	removeClass(modalWindowDeposit, 'hidden')
})
btnCloseDeposit.addEventListener('click', function() {
	addClass(modalWindowDeposit, 'hidden')
} );



btnPhone.addEventListener('click', copyToClipBoard);
