const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

	calculateDepth(array) {
	
		if (Array.isArray(array)) {
			if (array.length) {
				return 1 + Math.max(...array.map(this.calculateDepth.bind(this)));
			} else {
				return 1;
			}
		}

		return 0;

	}
		
};
