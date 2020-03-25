function Account() {
  this._balance = 0
  this._accountHistory = []
};

Account.prototype.getBalance = function() {
  return this._balance
};

Account.prototype.getAccountHistory = function() {
  return this._accountHistory
}

Account.prototype.credit = function(amount) {
  this._balance += amount;
  return this._accountHistory.push({date: Date.now(), credit: amount, balance: this._balance})
};

