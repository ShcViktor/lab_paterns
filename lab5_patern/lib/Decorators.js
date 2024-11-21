// Декоратор для покращення CreditCard
function GoldenCreditCard(card) {
  card.credit_limit += 5000; // Збільшити ліміт на 5000
  card.grace_period += 15;   // Збільшити період пільги на 15 днів
  return card;
}

// Декоратор для покращення BankCustomer
function VIPCustomer(customer) {
  customer.personal_info.vip_status = true;  // Позначаємо клієнта як VIP
  return customer;
}

module.exports = { GoldenCreditCard, VIPCustomer };
