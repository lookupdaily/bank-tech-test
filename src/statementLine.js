function StatementLine({credit = null, debit = null, balance}) {
  this.date = new Date()
  this.credit = credit
  this.debit = debit
  this.balance = balance
}