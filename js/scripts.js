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


BankAccount.prototype.addDeposit = function(deposit) {
  var account = this.accounts[0];
  return account.balance = account.balance + deposit;
}

Account.prototype.addWithdrawal = function(withdrawal) {
  return this.balance = this.balance - withdrawal;
}

// User Interface Logic ---------
var bankAccount = new BankAccount();

$(document).ready(function() {
  $("form#new-account").submit(function(event){
    event.preventDefault();
    var inputtedName = $("input#new-name").val();
    var inputtedInitialDeposit = parseInt($("input#initial-deposit").val());
    $("input#new-name").val("");
    $("input#initial-deposit").val("");
    var newAccount = new Account(inputtedName, inputtedInitialDeposit);
    bankAccount.addAccount(newAccount);
    console.log(newAccount);
  });

  $("form#transaction").submit(function(event){
    event.preventDefault();
    var inputtedDeposit = parseInt($("input#new-deposit").val());
    var inputtedWithdrawal = parseInt($("input#new-withdrawal").val());
    var newDeposit = bankAccount.addDeposit(inputtedDeposit);
    console.log(newDeposit);
    $("input#new-deposit").val("");
    $("input#new-withdrawal").val("");

    // Account.addWithdrawal(inputtedWithdrawal);
    // console.log(bankAccount);
    // console.log(inputtedDeposit);
  });

  $("form#balance").click(function(event){
    event.preventDefault();
    var inputtedInitialDeposit = parseInt($("input#initial-deposit").val());
    $("#new-balance").text(inputtedInitialDeposit);
    console.log(inputtedInitialDeposit);
  });
});
