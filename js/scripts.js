// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber, addresses) {
  this.addresses = addresses,
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Contact.prototype.addressPush = function(address) {
  //console.log("Here is what I've got:" + address);
  this.addresses.push(address);
}

//this object will save all of the addresses a user can make
function Address (homeAddress, email) {
  this.homeAddress = homeAddress,
  this.email = email,
  this.savedAddresses = []
}

//this will push the address object into the savedAddresses array
Address.prototype.addAddress = function(address) {
  this.savedAddresses.push(address);
}




// User Interface Logic ---------
var addressBook = new AddressBook();

var contactAddress = new Contact();

function displayContactDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};

function showContact(contactId) {
  var contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}

function showAddress(addressId) {
  var address = contact.findAdress(addressId);
  $("#show-address").show();
  $(".email").html(address.email);
  $(".home-address").html(address.homeAddress);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
};

$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var inputtedEmail = $("input#new-email").val();
    var inputtedHomeAdress = $("input#new-home-address").val();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#new-email").val("");
    $("input#new-home-address").val("");
    var addressArray = [];
    addressArray.push(inputtedHomeAdress);
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, addressArray);
    // newContact.addressPush(inputtedHomeAdress);
    // for (var i = 0; i < newContact.addresses.length; i++) {
    //   console.log(i);
    //   console.log("contact Object address:" + newContact.addresses);
    // }
    var newAddress = new Address(inputtedEmail, inputtedHomeAdress);
    addressBook.addContact(newContact);
    contactAddress.addressPush(newAddress);
    console.log(newAddress);
    //newAddress.addAddress(newContact);
    //console.log("trying for address object:" + newContact.addresses);
    displayContactDetails(addressBook);

  })
})
