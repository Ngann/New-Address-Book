// Business Logic for BankAccount ---------

function BankAccount() {
  this.accounts = [],
  this.currentId = 0
}

BankAccount.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.accounts.push(account);
}

BankAccount.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

BankAccount.prototype.addBalance = function(account) {
  this.balance.push(account);
}



// Business Logic for AccountInfo ---------

function Account(name, balance, deposit, withdrawal) {
  this.name = name,
  this.balance = balance,
  this.deposit = deposit,
  this.withdrawal = withdrawal
}


Account.prototype.addDeposit = function(deposit) {
  this.balance = this.balance + deposit;
}

Account.prototype.addWithdrawal = function(withdrawal) {
  this.balance = this.balance - withdrawal;
}

// User Interface Logic ---------

$(document).ready(function() {


});

var bankAccount = new BankAccount();
var accountOne = new Account("Tim", 300);
bankAccount.addAccount(accountOne);
accountOne.addDeposit(50);
accountOne.addWithdrawal(10);
