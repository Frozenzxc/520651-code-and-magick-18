'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var WIZARD_COUNT = 4;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');

var similarBox = document.querySelector('.setup-similar');
similarBox.classList.remove('hidden');

var wizardList = document.querySelector('.setup-similar-list');
var template = document.querySelector('#similar-wizard-template').content.querySelector('div');
var fragment = document.createDocumentFragment();

var MOCK = {
  name: {
    firstName: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    surName: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
  },
  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColor: ['black', 'red', 'blue', 'yellow', 'green'],
  fireballColor: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};

function randomElm(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateData() {
  var arr = [];
  for (var i = 0; i < WIZARD_COUNT; i++) {
    arr[i] = {
      name: randomElm(MOCK.name.firstName) + ' ' + randomElm(MOCK.name.surName),
      coatColor: randomElm(MOCK.coatColor),
      eyesColor: randomElm(MOCK.eyesColor)
    };
  }
  return arr;
}

var wizardsData = generateData();

function renderWizard(obj) {
  var element = template.cloneNode(true);
  element.querySelector('.setup-similar-label').textContent = obj.name;
  element.querySelector('.wizard-coat').style.fill = obj.coatColor;
  element.querySelector('.wizard-eyes').style.fill = obj.eyesColor;
  fragment.appendChild(element);
}

for (var i = 0; i < wizardsData.length; i++) {
  renderWizard(wizardsData[i]);
}

wizardList.appendChild(fragment);

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
}

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  var coatColor = randomElm(MOCK.coatColor);
  wizardCoat.style.fill = coatColor;
  setup.querySelector('input[name = coat-color]').value = coatColor;
});

wizardEyes.addEventListener('click', function () {
  var eyesColor = randomElm(MOCK.eyesColor);
  wizardEyes.style.fill = eyesColor;
  setup.querySelector('input[name = eyes-color]').value = eyesColor;
});

fireball.addEventListener('click', function () {
  var fireballColor = randomElm(MOCK.fireballColor);
  fireball.style.background = fireballColor;
  setup.querySelector('input[name = fireball-color]').value = fireballColor;
});
