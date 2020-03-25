describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });
  
  describe("when no actions have been taken", function() {
    it("has a balance of 0", function() {
      expect(account.getBalance()).toBe(0);
    });

    it("account history is an empty array", function() {
      expect(account._accountHistory).toEqual([])
    });
  })
    
  describe("when account is credited", function() {
    beforeEach(function() {
      account.credit(1);
    });

    it("account balance increases", function() {
      expect(account.getBalance()).toBe(1);
    });

    it("adds a record to the account history", function() {
      expect(account._accountHistory.length).toEqual(1)
    });

    it("logs the date, credit amount and new balance in a new line in the account history", function() {
      expect(account._accountHistory[0]).toEqual(jasmine.objectContaining({
        date: new Date(), 
        credit: 1,
        balance: 1
      }));
    });

  });

});