describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("can return a balance of 0", function() {
    expect(account.getBalance()).toBe(0);
  });

  it("balance increases when account is credited", function() {
    account.credit(1);
    expect(account.getBalance()).toBe(1);
  })
  
});