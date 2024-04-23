const currCalc = document.querySelector('.curr-calc');
const prevCalc = document.querySelector('.prev-calc');

displayError = 'Error! :(';

const displayCalc = val => {
	if (currCalc.innerHTML === displayError) {
		currCalc.innerHTML = '';
	}
	currCalc.innerHTML += val;
};

const clearNum = () => {
	currCalc.innerHTML = '';
	prevCalc.innerHTML = '';
};

const eraseCalc = () => {
	if (currCalc.innerHTML === displayError) {
		currCalc.innerHTML = '';
	}
	currCalc.innerHTML = currCalc.innerHTML.substring(0, currCalc.innerHTML.length - 1);
	if (currCalc.innerHTML.trim() === '') {
		currCalc.innerHTML = prevCalc.innerHTML;
		prevCalc.innerHTML = '';
	}
};

const performCalc = () => {
	try {
		if (currCalc.innerHTML !== '') {
			prevCalc.innerHTML = currCalc.innerHTML;
			currCalc.innerHTML = eval(currCalc.innerHTML);
		}
	} catch (err) {
		currCalc.innerHTML = displayError;
		prevCalc.innerHTML = '';
	}
};
