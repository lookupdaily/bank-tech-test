describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("can return a balance of 0", function() {
    expect(account.getBalance()).toBe(0);
  });
  
});