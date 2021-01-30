const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

	if (!date) return "Unable to determine the time of year!";

	if (date.getMonth() === undefined || date.toString().split(' ')[2] !==
		(date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate()) ||
		date.getMonth() < 0 || date.getMonth() > 11) {
		throw new Error('Unable to determine the time of year!');
	}
	
	let month = date.getMonth() + 1;

	if (month < 3 || month == 12) return "winter";
	if (month > 2 && month < 6) return "spring";
	if (month > 5 && month < 9) return "summer";
	if (month > 8 && month < 12) return "autumn";
	
};

