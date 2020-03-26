'use strict';

function Bank() {
}

Bank.prototype.deposit = function(account, amount) {
  if(amount < 1) throw new Error("Cannot deposit less than £1")
  account.credit(amount)
}

Bank.prototype.withdraw = function(account, amount) {
  if(amount < 1) throw new Error("Cannot withdraw less than £1")
  account.debit(amount)
}

Bank.prototype.printStatement = function(account) {
  var statement = "date || credit || debit  || balance"
  var accountHistory = account.getAccountHistory()

  accountHistory.sort(dateSortDesc).forEach((line) => {
    var newLine = `\n${line.date.toLocaleDateString('en-GB')} || ${line.credit} || ${line.debit} || ${line.balance}`
    statement += newLine.replace(null, "")
  })
  return statement
}
