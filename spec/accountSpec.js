describe("Account", function() {
  var account

  beforeEach(function() {
    account = new Account()
  })
  
  describe("when no actions have been taken", function() {
    it("has a balance of 0", function() {
      expect(account.getBalance()).toBe(0)
    })

    it("account history is an empty array", function() {
      expect(account.getAccountHistory()).toEqual([])
    })
  })
  
  describe("when account is credited", function() {
    beforeEach(function() {
      account.credit(1)
    })

    it("account balance increases", function() {
      expect(account.getBalance()).toBe(1)
    })

    it("adds a record to the account history", function() {
      expect(account.getAccountHistory().length).toEqual(1)
    })

  })

  describe("when account is debited", function() {
    beforeEach(function() {
      account._balance = 2
      account.debit(1)
    })

    it("account balance decreases", function() {
      expect(account.getBalance()).toBe(1)
    })

    it("adds a record to the account history", function() {
      expect(account.getAccountHistory().length).toEqual(1)
    })

    it("throws an error if debit will take balance below 0", function() {
      expect(function() {
        account.debit(2)
      }).toThrowError("Insufficient funds")
    })
  })
})
