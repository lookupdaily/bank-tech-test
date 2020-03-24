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
  
});