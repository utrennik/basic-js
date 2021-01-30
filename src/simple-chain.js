const CustomError = require("../extensions/custom-error");

const chainMaker = {

	chain : [],

	getLength() {
		return this.chain.length;
	},
	
	addLink(value) {
		if (value === undefined) {
			this.chain.push('');
		} else {
			this.chain.push(String(value));
		}
		return this;
	},

	removeLink(position) {
		if (isNaN(position) || !isFinite(position) || !Number.isInteger(position) ||
			position === undefined || position === null || position < 0 ||
			position >= this.chain.length) {
			this.chain.length = 0;
			throw new Error('Invalid position: ' + position);
		} else {
				this.chain.splice(position - 1, 1);
				return this;
			}
	},

	reverseChain() {
		this.chain.reverse();
		return this;
	},

	finishChain() {
		let result = this.chain.slice();
		this.chain.length = 0;

		return result.map((element, index) => {
			if (index == 0) {
				return "( " + element + " )";
			} else {
				return "~~( " + element + " )";
			}
		}).join('');

	}
};

module.exports = chainMaker;
