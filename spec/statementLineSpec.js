describe("Statement Line", function() {
  var statementLine

  beforeEach(function() {
    statementLine = new StatementLine({balance: 1})
  })

  it("logs the date by default", function() {
    expect(statementLine.date).toEqual(new Date())
  })

  it("logs a balance", function() {
    expect(statementLine.balance).toEqual(1)
  })

  describe("when passed a credit amount", function() {
    beforeEach(function() {
      
    })
    it("logs credit amount", function() {
      statementLine = new StatementLine({credit: 1, balance: 1})
      expect(statementLine.credit).toEqual(1)
    })

    it("records null for debit", function() {
      expect(statementLine.debit).toEqual(null)
    })

  })

  describe("when passed a debit amount", function() {
    beforeEach(function() {
      statementLine = new StatementLine({debit: 1, balance: 1})
    })
    it("logs credit amount", function() {
      expect(statementLine.debit).toEqual(1)
    })

    it("records null for debit", function() {
      expect(statementLine.credit).toEqual(null)
    })

  })
  
})