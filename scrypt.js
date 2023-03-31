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