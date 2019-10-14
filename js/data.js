'use strict';

(function () {
  var template = document.querySelector('#similar-wizard-template').content.querySelector('div');

  function renderWizard(obj) {
    var element = template.cloneNode(true);
    element.querySelector('.setup-similar-label').textContent = obj.name;
    element.querySelector('.wizard-coat').style.fill = obj.colorCoat;
    element.querySelector('.wizard-eyes').style.fill = obj.colorEyes;
    return element;
  }

  window.data = {
    renderWizard: renderWizard
  };
})();
