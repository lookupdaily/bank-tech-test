describe("Bank Interactions", function() {
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
      expect(bank.printStatement(account)).toBe("date || credit || debit  || balance\n24/03/2020 || 1 ||  || 1")
    })
  })
  
});