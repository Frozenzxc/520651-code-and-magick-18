'use strict';

(function () {
  var WIZARD_COUNT = 4;
  var wizardList = document.querySelector('.setup-similar-list');
  var template = document.querySelector('#similar-wizard-template').content.querySelector('div');
  var fragment = document.createDocumentFragment();

  function generateData() {
    var arr = [];
    for (var i = 0; i < WIZARD_COUNT; i++) {
      arr[i] = {
        name: window.util.getRandomElm(window.MOCK.name.firstName) + ' ' + window.util.getRandomElm(window.MOCK.name.surName),
        coatColor: window.util.getRandomElm(window.MOCK.coatColor),
        eyesColor: window.util.getRandomElm(window.MOCK.eyesColor)
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
})();
