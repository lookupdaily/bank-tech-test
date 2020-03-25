describe("Bank", function() {
  var bank;
  var account, balance = 0

  beforeEach(function() {
    bank = new Bank()
  })

  describe("depositing in an account", function() {
    beforeEach(function() {
      account = {
        credit: function(amount) {
        }  
      }
      spyOn(account, 'credit')
    })
  
    it("tracks that account.credit was called", function() {
      bank.deposit(account, 1)
      expect(account.credit).toHaveBeenCalledWith(1);
    })
  })

  describe("printing a statement", function() {
    it("is blank with headers if no actions have taken", function() {
      expect(bank.printStatement(account)).toBe("date || credit || debit  || balance")
    })
  })
  
})
