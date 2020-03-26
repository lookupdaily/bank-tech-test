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
  this.addStatementLine({credit: amount, balance: this._balance})
};

Account.prototype.debit = function(amount) {
  if(this._balance - amount < 0) throw new Error("Insufficient funds")
  this._balance -= amount;
  this.addStatementLine({debit: amount, balance: this._balance})
}

Account.prototype.addStatementLine = function(params) {
  this._accountHistory.push(new StatementLine(params))
}

