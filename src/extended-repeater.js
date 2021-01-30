const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	
	str = str + '';
	let repeatTimes = (options.repeatTimes === undefined ? 0 : +options.repeatTimes);
	let separator = (options.separator === undefined ? '+' : options.separator);
	let addition = (options.addition === undefined ? '' : options.addition + '');
	let additionRepeatTimes = (options.additionRepeatTimes === undefined ? 0 : +options.additionRepeatTimes);
	let additionSeparator = (options.additionSeparator === undefined ? '|' : options.additionSeparator);

	let result = '';

	if(!repeatTimes) result = addAddition(str);

	for (let i = 0; i < repeatTimes; i++){
		result = result + addAddition(str) + ((i + 1 == repeatTimes) ? '' : separator);
	}

	function addAddition(str) {
		if (!additionRepeatTimes) return str + addition;
		let additionResult = '';
		for (let i = 0; i < additionRepeatTimes; i++){
			additionResult = additionResult + addition +
			((i + 1 == additionRepeatTimes) ? '' : additionSeparator);
		}
		return str + additionResult;
	}

	return result;

};
	