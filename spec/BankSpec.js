describe("Bank", function() {
  var bank;
  var account;

  beforeEach(function() {
    bank = new Bank();
  });

  it("can print a blank statement with headers", function() {
    expect(bank.printStatement(account)).toBe("date || credit || debit  || balance")
  })
})
