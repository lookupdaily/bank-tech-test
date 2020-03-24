# Bank tech test

This is a tech test completed to improve my code quality, whilst enrolled at Makers Academy. 

### Technology used

This programme is written in vanilla JavaScript, tests are written using Jasmine.

### Getting started

You can interact with this programme from the JavaScript console in your browser:

1. Clone this repo
2. Open index.html
3. Open your browser's dev tools and visit the console tab

### Useage

*Coming soon*

### Running tests

1. Open `SpecRunner.html` to run tests.

## Specification

### Requirements

A programme which allows a user to make deposits or withdraw money from their bank account. The user is able to print a statement of recent deposits and withdrawals and the account balance.

### Acceptance criteria

- **Given** a client makes a deposit of 1000 on 10-01-2012
- **And** a deposit of 2000 on 13-01-2012
- **And** a withdrawal of 500 on 14-01-2012
- **When** she prints her bank statement
- **Then** she would see

```
date || credit || debit  || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Planning

### Example code
```
bank = new Bank()
account = new Account

bank.credit(account,200)
bank.debit(account,100)
bank.printStatement(account)
```

### User stories
```
As a bank user, 
So that I can manage my finances,
I would like to be able to set up an account with the bank

As a bank user, 
So that I can save money, 
I would like to be able to be able to deposit money in my account

As a bank user, 
So that I can tell how much money I've saved,
I would like my bank to keep track of how much money is in my account

As a bank user,
So that I can spend money,
I would like to be able to wihdraw money from my account

As a bank user,
So that I can monitor my spending and saving habits,
I would like my bank to remember the dates I made my deposits and withrawals

As a bank user,
So that I can monitor my spending and saving habits,
I would like my bank to remember how much money I deposited or withdrew from my account each time

As a bank user,
So that I can monitor my spending and saving habits, 
I would like my bank to store the state of my balance alongside each deposit or withdrawal

As a bank user,
So that I can check my banking history, 
I would like to be able to print a list of my withdrawals and deposits, along with my balance.

As a bank user,
So that I can check my banking history in order,
I would like my printed statement to be ordered in reverse chronological order
```

### Class diagrams

*Container for user interactions with account:*

| Object:           |**Bank**      |        |              |
|:-----------------:|:------------:|:------:|:------------:|
|**Attributes:**    |              |        |              |
|**Public Methods:**|Deposit       |Withdraw|PrintStatement|

*Container for individual account state:*
|Object:            |**Account**  |              |
|:-----------------:|:-----------:|:------------:|
|**Attributes:**    |Balance      |History       |
|**Public Methods** |Credit       |Debit         |
|**Private methods**|LogAction    |              |

### Inputs/Outputs

The following inputs are written from user perspective
Assuming a starting balance of 0
To set up each test we will need a new bank and a new class object.

|Status|Input                       |Output                     |Scenario                                      |
|------|----------------------------|---------------------------|----------------------------------------------|
|+     |bank.printStatement(account)|"date-credit-debit-balance"|bank prints a blank statement on a new account| 
|+     |bank.deposit(account, 1), bank.printStatement(account)|"date-credit-debit-balance\n23/03/2020-1- -1"|user deposits £1 in account                   |





