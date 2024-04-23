const currCalc = document.querySelector('.curr-calc');
const prevCalc = document.querySelector('.prev-calc');

const displayCalc = val => {
	if (currCalc.innerHTML === 'Error! :(') {
		currCalc.innerHTML = '';
	}
	currCalc.innerHTML += val;
};

const clearNum = () => {
	currCalc.innerHTML = '';
	prevCalc.innerHTML = '';
};

const eraseCalc = () => {
	currCalc.innerHTML = currCalc.innerHTML.substring(0, currCalc.innerHTML.length - 1);
	if (currCalc.innerHTML.trim() === '') {
		currCalc.innerHTML = prevCalc.innerHTML;
		prevCalc.innerHTML = '';
	}
};

const performCalc = () => {
	try {
		prevCalc.innerHTML = currCalc.innerHTML;
		currCalc.innerHTML = eval(currCalc.innerHTML);
	} catch (err) {
		currCalc.innerHTML = 'Error! :(';
		prevCalc.innerHTML = '';
	}
};
