class BankInfo {
  constructor(bankName, holderName, accountsNumber, creditHistory) {
      this.bankName = bankName;
      this.holderName = holderName;
      this.accountsNumber = accountsNumber;
      this.creditHistory = creditHistory;
  }

  transaction_list(accountNumber) {
      return this.creditHistory[accountNumber] || [];
  }
}

module.exports = BankInfo;
