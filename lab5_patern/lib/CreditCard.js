const crypto = require('crypto');

class CreditCard {
    constructor(client, accountNumber, creditLimit, gracePeriod, cvv) {
        this.client = client;
        this.accountNumber = accountNumber;
        this.creditLimit = creditLimit;
        this.gracePeriod = gracePeriod;
        this._cvv = this.encrypt(cvv); // Store hashed CVV
    }

    encrypt(value) {
        return crypto.createHash('sha256').update(value).digest('hex');
    }

    decrypt(value) {
        return value; // Not applicable for real hashing
    }

    give_details() {
        return {
            client: this.client,
            accountNumber: this.accountNumber,
            creditLimit: this.creditLimit,
            gracePeriod: this.gracePeriod,
            cvv: this._cvv // For testing; not recommended in real life
        };
    }
}

module.exports = CreditCard;
