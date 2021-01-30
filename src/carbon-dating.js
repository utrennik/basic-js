const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if (!sampleActivity) return false;

	sampleActivity = +sampleActivity;

	if (isNaN(sampleActivity) || ! isFinite(sampleActivity) || sampleActivity > 14 || sampleActivity <= 0) {
		return false;
	}

	return (Math.ceil(Math.log(sampleActivity / MODERN_ACTIVITY) / 1.22 * Math.pow(10, -4)));
};
