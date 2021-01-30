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
		key = this.keyGen(key);
		msg = msg.toUpperCase().split('');

		for (let i = 0; i < msg.length; i++){
			if (msg[i].charCodeAt(0) > 90 || msg[i].charCodeAt(0) < 65) continue;
			msg[i] = this.shift(msg[i], key.next());
		}

		if (this.direct === false) {
			return msg.reverse().join('');
		} else return msg.join('');
	}

	decrypt(encryptedMsg, key) {
		if (arguments.length < 2) throw new Error('params undefined');
		key = this.keyGen(key);
		encryptedMsg = encryptedMsg.toUpperCase().split('');

		for (let i = 0; i < encryptedMsg.length; i++){
			if (encryptedMsg[i].charCodeAt(0) > 90 || encryptedMsg[i].charCodeAt(0) < 65) continue;
			encryptedMsg[i] = this.unshift(encryptedMsg[i], key.next());
		}

		if (this.direct === false) {
			return encryptedMsg.reverse().join('');
		} else return encryptedMsg.join('');
	}

	keyGen(key) {
		key = key.toUpperCase().split('');
		key.current = 0;
		key.next = function () {
			if (this.current == this.length) this.current = 0;
			return this[this.current++];
		}
		return key;
	}

	shift(symb, key) {
		let shift = key.charCodeAt(0) - 65;
		let position = symb.charCodeAt(0) - 65 + shift;
		if (position >= 26) position = position - 26;
		return String.fromCharCode(position + 65);
	}

	unshift(symb, key) {
		let shift = key.charCodeAt(0) - 65;
		let position = symb.charCodeAt(0) - 65 - shift;
		if (position < 0) position = position + 26;
		return String.fromCharCode(position + 65);
	}

}

module.exports = VigenereCipheringMachine;
