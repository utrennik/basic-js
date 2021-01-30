const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	let cats = 0;
	for (let i = 0; i < matrix.length; i++){
		matrix[i].forEach((el) => {
			if (el == '^^') cats++;
		})
	}

	return cats;
};
