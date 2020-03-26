describe("Bank", function() {
  var bank
  var account

  beforeEach(function() {
    bank = new Bank()
    account = {
      credit: function(value) {
      },
      debit: function(value) {
      },
      getAccountHistory: function() { 
      }
    }
  })

  describe("depositing to an account", function() {
    it("tracks that account.credit was called with amount", function() {
      spyOn(account, 'credit')
      bank.deposit(account, 1)
      expect(account.credit).toHaveBeenCalledWith(1);
    })
  })

  describe("withdrawing from an account", function() {
    it("tracks that account.credit was called with amount", function() {
      spyOn(account, 'debit')
      bank.withdraw(account, 1)
      expect(account.debit).toHaveBeenCalledWith(1);
    })
  })

  describe("printing a statement", function() {
    it("is blank with headers if no actions have taken", function() {
      spyOn(account, 'getAccountHistory').and.returnValue([])
      expect(bank.printStatement(account)).toBe("date || credit || debit  || balance")
    })

    it("can print one line history with just debit amount", function() {
      spyOn(account, 'getAccountHistory').and.returnValue([{date: new Date(), credit: 1, debit: null, balance: 1}])
      expect(bank.printStatement(account)).toEqual(`date || credit || debit  || balance\n${(new Date()).toLocaleDateString('en-GB')} || 1 ||  || 1`)
    })

    

    it("prints multiple actions in reverse chronological order", function(){
      var date1 = new Date('Thu Mar 24 2020 09:30:00 GMT+0000')
      var date2 = new Date('Thu Mar 26 2020 09:30:00 GMT+0000')
      spyOn(account, 'getAccountHistory').and.returnValue([{date: date1, credit: 2, debit: null, balance: 2}, {date: date2, credit: null, debit: 1, balance: 1}])
      expect(bank.printStatement(account)).toEqual(`date || credit || debit  || balance\n${date2.toLocaleDateString('en-GB')} ||  || 1 || 1\n${date1.toLocaleDateString('en-GB')} || 2 ||  || 2`)
    })
  })

})
