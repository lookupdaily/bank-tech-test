function Account() {
  this._balance = 0
};

Account.prototype.getBalance = function() {
  return this._balance
};

Account.prototype.credit = function(amount) {
  return this._balance += amount;
};

