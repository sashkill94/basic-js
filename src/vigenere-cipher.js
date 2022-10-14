const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

    direct = true;

    constructor(isdirect = true) {
        this.direct = isdirect;
    }

    encrypt(message = null, key = null) {
        if (typeof (message) != 'string' || typeof (key) != 'string') {
            throw new Error('Incorrect arguments!');
        }
        let messageArr = message.split('');
        let keyArr = key.split('');
        let keyPosition = 0;
        const newArr = messageArr.map(el => {
            if (el.toUpperCase().charCodeAt(0) >= 65 && el.toUpperCase().charCodeAt(0) <= 90) {
                const keyShift = keyArr[keyPosition].toUpperCase().charCodeAt(0) - 65;
                const startLetterPosition = el.toUpperCase().charCodeAt(0);
                const pottentialPosition = startLetterPosition + keyShift;
                const finishLetterPosition = pottentialPosition <= 90 ? pottentialPosition : 64 + (pottentialPosition % 90);
                keyPosition = keyPosition + 1 >= keyArr.length ? 0 : ++keyPosition;
                return String.fromCharCode(finishLetterPosition);
            } else {
                return el;
            }
        });
        return this.direct ? newArr.join('') : newArr.reverse().join('');
    }
    decrypt(encryptedMessage, key) {
        if (typeof (encryptedMessage) != 'string' || typeof (key) != 'string') {
            throw new Error('Incorrect arguments!');
        }
        let messageArr = encryptedMessage.split('');
        let keyArr = key.split('');
        let keyPosition = 0;
        const newArr = messageArr.map(el => {
            if (el.toUpperCase().charCodeAt(0) >= 65 && el.toUpperCase().charCodeAt(0) <= 90) {
                const keyShift = keyArr[keyPosition].toUpperCase().charCodeAt(0) - 65;
                const startLetterPosition = el.toUpperCase().charCodeAt(0);
                const pottentialPosition = startLetterPosition - keyShift;
                const finishLetterPosition = pottentialPosition >= 65 ? pottentialPosition : 90 - (64 - pottentialPosition);
                keyPosition = keyPosition + 1 >= keyArr.length ? 0 : ++keyPosition;
                return String.fromCharCode(finishLetterPosition);
            } else {
                return el;
            }
        });
        return this.direct ? newArr.join('') : newArr.reverse().join('');
    }
}

module.exports = {
  VigenereCipheringMachine
};
