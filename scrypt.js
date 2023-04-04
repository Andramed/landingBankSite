let notification = document.querySelector('#notification'),
	btnPhone = document.querySelector('.phone');


btnPhone.addEventListener('click', function() {
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
})



// creazi inputuri cu datelee necesare care trebuie sa le primesti,

//sa salvam datele din inputuri in js creind variabile necesare,
// let sum = document.querySelector('.sum') // cit ii trebuie lu user lei
// adaugam btn necesar in js,
//dupa care ii adaugam un ascultator, (addeventListener)
//dupa care ii spunem ce sa faca  click,  function()
// 1. asigneaza valori la variabilele in care sun salvate inputuri, suma = suma.value;
// 2. scrim cum trebui sa calculeze 
// 3. D = dobanda // rezultatul cit va achita pe luna
// S0 = suma imprumutata // cit vre el, userSum
// D’ = rata dobanzii// 4.6%
// N = perioada de creditare // perioda care o salvam in periods 
// suma totala la intoarcere :  valoarea totală a creditului D * perioada
// Pentru depozite,
// SUma care vrea so depoziteze-> depozitSum,
// perioada pe care doreste sa faca depozitul,
// reintoarce suma care o va obtine pe perioada dorita,
// sumTotalDepozit = pentru o luna el are 100000 + 2000;
// 2LUNE = 1002000 +  2040
// 3 LUNA = 104040 + 2 080
// 1 AN = 4,6% 6 luni
// luna = 100383 // 2 luna //
let btnAplyOnline = document.querySelector('.aplyOnline')
let calculator = document.querySelector('.loansCalculator');
let close = document.querySelector('.btnClose');
btnAplyOnline.addEventListener('click', function () {
	calculator.classList.add('loansCalculatorDisplay')
})

document.querySelector('.btnClose').addEventListener('click', function(){
	calculator.classList.remove('loansCalculatorDisplay')
})

console.log(document.getElementById('iService'));