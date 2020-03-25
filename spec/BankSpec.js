describe("Bank", function() {
  var bank;
  var account

  beforeEach(function() {
    bank = new Bank()
    account = {
      credit: function(value) {
        return value
      },
      getAccountHistory: function() {
        return 1
      }
    }
  })

  describe("depositing in an account", function() {
    it("tracks that account.credit was called", function() {
      spyOn(account, 'credit')
      bank.deposit(account, 1)
      expect(account.credit).toHaveBeenCalledWith(1);
    })
  })

  describe("printing a statement", function() {
    it("is blank with headers if no actions have taken", function() {
      spyOn(account, 'getAccountHistory').and.returnValue([])
      expect(bank.printStatement(account)).toBe("date || credit || debit  || balance")
    })

    it("can print one line history with just debit amount", function() {
      spyOn(account, 'getAccountHistory').and.returnValue([{date: new Date(), credit: 1, balance: 1}])
      expect(bank.printStatement(account)).toEqual(`date || credit || debit  || balance\n${(new Date()).toLocaleDateString('en-GB')} || 1 ||  || 1`)
    })
  })

})
