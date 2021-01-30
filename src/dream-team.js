const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) return false;
	let result = [];

	members.forEach(element => {
		if (typeof element == "string") {
			result.push(element.trim().toUpperCase()[0]);
		}
	});

	return result.sort().join('');
	
};
