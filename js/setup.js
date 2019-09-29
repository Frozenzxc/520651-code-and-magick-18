'use strict';

var WIZARD_COUNT = 4;
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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
  eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
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
