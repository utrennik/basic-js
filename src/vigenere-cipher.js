const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

	direct = true;

	constructor(direct) {
		if (direct === undefined || direct == true) {
			this.direct = true;
		} else {
			this.direct = false;
		}
	}

	encrypt(msg, key) {
		if (arguments.length < 2) throw new Error('params undefined');
		key = this.extendKey(msg, key);
		msg = msg.toUpperCase().split('');

		for (let i = 0; i < msg.length; i++){
			msg[i] = this.shift(msg[i], key[i]);
		}

		if (this.direct === false) {
			return msg.reverse().join('');
		} else return msg.join('');
	}

	decrypt(encryptedMsg, key) {
		if (arguments.length < 2) throw new Error('params undefined');
		key = this.extendKey(msg, key);
		encryptedMsg = encryptedMsg.toUpperCase().split('');

		for (let i = 0; i < encryptedMsg.length; i++){
			encryptedMsg[i] = this.unshift(encryptedMsg[i], key[i]);
		}

		if (this.direct === false) {
			return encryptedMsg.reverse().join('');
		} else return encryptedMsg.join('');
	}

	extendKey(msg, key) {
		key = key.split('');
		while (key.length < msg.length) {
			key.concat(key.slice());
		}
		key.length = msg.length;
		return key.join('').toUpperCase();
	}

	shift(symb, key) {
		if (symb.charCodeAt(0) > 90 || symb.charCodeAt(0) < 65) return symb;
		let shift = key.charCodeAt(0) - 65;
		let position = symb.charCodeAt(0) - 65 + shift;
		if (position > 26) position = position - 26;
		return String.fromCharCode(position);
	}

	unshift(symb, key) {
		let shift = key.charCodeAt(0) - 65;
		let position = symb.charCodeAt(0) - 65 - shift;
		if (position < 0) position = position + 26;
		return String.fromCharCode(position);
	}

}

module.exports = VigenereCipheringMachine;
