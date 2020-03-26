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

  accountHistory.sort(dateSortDesc).forEach((line) => {
    var newLine = `\n${line.date.toLocaleDateString('en-GB')} || ${line.credit} || ${line.debit} || ${line.balance}`
    statement += newLine.replace(null, "")
  })
  return statement
}

var dateSortDesc = function(date1, date2) { 
  if (date1.date > date2.date) return -1
  if (date1.date < date2.date) return 1
  return 0
}
