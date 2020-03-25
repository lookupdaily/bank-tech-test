describe("Bank Features", function() {
  var bank;
  var account;

  beforeEach(function() {
    bank = new Bank();
    account = new Account();
  });

  it("prints a statement", function() {
    expect(bank.printStatement(account)).toBe("date || credit || debit  || balance");
  });

  describe("when user makes one transaction", function() {
    it("adds one line to account statement for a deposit", function() {
      bank.deposit(account, 1);
      expect(bank.printStatement(account)).toBe(`date || credit || debit  || balance\n${(new Date()).toLocaleDateString('en-GB')} || 1 ||  || 1`)
    })

    it("adds one line to the account statement for a withdrawal", function() {
      account._balance = 2
      bank.withdraw(account, 1);
      expect(bank.printStatement(account)).toBe(`date || credit || debit  || balance\n${(new Date()).toLocaleDateString('en-GB')} ||  || 1 || 1`)
    })
  })
  
});