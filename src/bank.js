function Bank() {
}

Bank.prototype.deposit = function(account, amount) {
  account.credit(amount)
}

Bank.prototype.withdraw = function(account, amount) {
  account.debit(amount)
}

Bank.prototype.printStatement = function(account) {
  var statement = "date || credit || debit  || balance"
  var accountHistory = account.getAccountHistory()
  for(var i = 0; i < accountHistory.length; i++) {
    var line = accountHistory[i]
    var newLine = `\n${line.date.toLocaleDateString('en-GB')} || ${line.credit} || ${line.debit} || ${line.balance}`
    statement += newLine.replace(null, "")
  }
  return statement
}
