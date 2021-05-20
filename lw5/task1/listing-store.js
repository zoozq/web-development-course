window.onload = function () {
  var listingElements = ['apple', 'orange'];
  var storeElements = [];
  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }
  function addToListingElements(element) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.push(element);
      storeElements.splice(elementPosition, 1);
    }
  }
  function deleteElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition < 0) {
      elementPosition = storeElements.indexOf(element);
      storeElements.splice(elementPosition, 1);
    } else {
      listingElements.splice(elementPosition, 1);
    }
  }
  function addNewElement(element) {
    listingElements.push(element);
  }
  function updateUI() {
    var storeSelect = document.querySelector('.store-select');
    var storeTitle = document.querySelector('.store-title');
    var listingSelect = document.querySelector('.listing-select');
    var listingTitle = document.querySelector('.listing-title');
    var storeLength = storeElements.length;
    var listingLength = listingElements.length;
    storeTitle.innerHTML = `Store ${storeLength}`;
    listingTitle.innerHTML = `Listing ${listingLength}`;
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';
    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }
    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }
  var addButton = document.querySelector('#add-button-store');
  addButton.onclick = function () {
    var selectedOption = document.querySelector('.listing-select option:checked');
    addToStoreElements(selectedOption.innerText);
    updateUI();
  }
  var addButton = document.querySelector('#add-button-listing');
  addButton.onclick = function () {
    var selectedOption = document.querySelector('.store-select option:checked');
    addToListingElements(selectedOption.innerText);
    updateUI();
  }
  var addButton = document.querySelector('#delete-button');
  addButton.onclick = function () {
    var selectedOption = document.querySelector('.listing-select option:checked, .store-select option:checked');
    deleteElements(selectedOption.innerText);
    updateUI();
  }
  var addButton = document.querySelector('#add-button-new-element');
  addButton.onclick = function () {
    var newElement = prompt('Добавить', 'Название');
    addNewElement(newElement);
    updateUI();
  }
  updateUI();
};
