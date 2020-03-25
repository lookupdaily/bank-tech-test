Bank = function() {
}

Bank.prototype.printStatement = function(account) {
  var statement = "date || credit || debit  || balance"
  var accountHistory = account.getAccountHistory()
  for(var i = 0; i < accountHistory.length; i++) {
    var line = accountHistory[i]
    statement += `\n${line.date.toLocaleDateString('en-GB')} || ${line.credit} || ${line.debit} || ${line.balance}`
  }
  return statement.replace(undefined, "")
}

Bank.prototype.deposit = function(account, amount) {
  account.credit(amount)
}

Bank.prototype.withdraw = function(account, amount) {
  account.debit(amount)
}
