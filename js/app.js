// from dom
const inputCash = document.querySelector('.cash-input')
const inputSplit = document.querySelector('.split-input')
const inputTip = document.querySelector('.tip-input')
// console.log(inputTip.);

const outputBill = document.querySelector('.total-output')
const outputSplit = document.querySelector('.total-split-output')

// variables
let total

// function
const totalBillCalc = total => {
	let tip = +inputTip.value / 100
	total = (+inputCash.value + +inputCash.value * tip).toFixed(2)
	outputBill.textContent = total
	return total
}

total = totalBillCalc()

const splitCalc = () => {
	console.log(total / inputSplit.value)
	let split = (total / inputSplit.value).toFixed(2)
	if (inputSplit.value > 0) {
		outputSplit.textContent = split
	} else {
		outputSplit.textContent = 'none'
	}
}

// listeners
inputCash.addEventListener('keyup', totalBillCalc, splitCalc)
inputTip.addEventListener('keyup', totalBillCalc, splitCalc)
inputSplit.addEventListener('keyup', splitCalc)
