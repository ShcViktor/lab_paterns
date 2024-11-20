const express = require('express');
const fs = require('fs');
const CreditCard = require('./CreditCard');
const BankInfo = require('./BankInfo');
const BankCustomer = require('./BankCustomer');
const PersonalInfo = require('./PersonalInfo');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server is running and ready to accept requests!');
});

// Read input data
const inputData = JSON.parse(fs.readFileSync('./input.json', 'utf-8'));

// Create objects
const personalInfo = new PersonalInfo(
    inputData.personal_info.name,
    inputData.personal_info.address,
    inputData.personal_info.phone_number,
    inputData.personal_info.email
);

const creditCard = new CreditCard(
    inputData.credit_card.client,
    inputData.credit_card.account_number,
    inputData.credit_card.credit_limit,
    inputData.credit_card.grace_period,
    inputData.credit_card.cvv
);

const bankInfo = new BankInfo(
    inputData.bank_info.bank_name,
    inputData.bank_info.holder_name,
    inputData.bank_info.accounts_number,
    inputData.bank_info.credit_history
);

const bankCustomer = new BankCustomer(personalInfo, bankInfo);

// REST API endpoints
app.get('/api/creditcard', (req, res) => {
    res.json(creditCard.give_details());
});

app.get('/api/bankcustomer', (req, res) => {
    res.json(bankCustomer.give_details());
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
