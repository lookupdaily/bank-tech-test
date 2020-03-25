Bank = function() {
};

Bank.prototype.printStatement = function(account) {
  var statement = "date || credit || debit  || balance"
  console.log(account.getAccountHistory())
  var accountHistory = account.getAccountHistory()
  console.log(accountHistory)
  for(var i = 0; i < accountHistory.length; i++) {
    var line = accountHistory[i]
    statement += `\n${line.date.toLocaleDateString('en-GB')} || ${line.credit} ||  || ${line.balance}`
  }
  return statement
};

Bank.prototype.deposit = function(account, amount) {
  account.credit(amount);
};
