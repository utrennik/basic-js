const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

	if (!Array.isArray(arr)) {
		throw new Error("Argument is not an array!");
	}

	let array = arr.slice();

	array.forEach((element, index) => {

		switch (element) {
			
			case "--discard-next": {
				if ( (index + 1) < array.length) {
					array[index + 1] = null;
				}
				array[index] = null;
				break;
			}
			
			case "--discard-prev": {
				if ((index - 1) >= 0) {
					array[index - 1] = null;
				}
				array[index] = null;
				break;
			}
				
			case "--double-next": {
				if ((index + 1) < array.length) {
					array[index] = array[index + 1];
				} else {
					array[index] = null;
				}
				break;
			}
			
			case "--double-prev": {
				if ((index - 1) >= 0) {
					array[index] = array[index - 1];
				} else {
					array[index] = null;
				}
				break;
			}
				
				
		}
	});

	return array.filter(element => {
		if (element !== null) return true;
		return false;
	});
	
};
