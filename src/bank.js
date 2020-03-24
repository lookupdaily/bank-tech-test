Bank = function() {
};

Bank.prototype.printStatement = function(account) {
  return "date || credit || debit  || balance"
};

Bank.prototype.deposit = function(account, amount) {
  account.credit(amount);
};
