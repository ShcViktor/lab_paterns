const PersonalInfo = require('./PersonalInfo');

class BankCustomer {
    constructor(personalInfo, bankInfo) {
        this.personalInfo = personalInfo;
        this.bankInfo = bankInfo;
    }

    give_details() {
        return {
            personalInfo: this.personalInfo,
            bankDetails: this.bankInfo,
            transactions: this.bankInfo.transaction_list(this.bankInfo.accountsNumber[0])
        };
    }
}

module.exports = BankCustomer;
