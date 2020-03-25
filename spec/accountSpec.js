describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });
    
    it("can return a balance of 0", function() {
      expect(account.getBalance()).toBe(0);
    });

    it("account history is an empty array", function() {
      expect(account.getAccountHistory()).toEqual([])
    });
 


  describe("when account is credited", function() {
    beforeEach(function() {
      account.credit(1);
    });

    it("balance increases when account is credited", function() {
      expect(account.getBalance()).toBe(1);
    });

    it("adds a record to the account history", function() {
      expect(account.getAccountHistory().length).toEqual(1)
    });

    it("adds a credit amount to the account history", function() {
      expect(account.getAccountHistory()[0].credit).toEqual(1)
    });

    it("adds the new balance to the account history", function() {
      expect(account.getAccountHistory()[0].balance).toEqual(1)
    });
  });

  
  

});