'use strict';

(function () {
  var template = document.querySelector('#similar-wizard-template').content.querySelector('div');
  var WIZADRLIST_COUNT = 4;
  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  function renderWizard(obj) {
    var element = template.cloneNode(true);
    element.querySelector('.setup-similar-label').textContent = obj.name;
    element.querySelector('.wizard-coat').style.fill = obj.colorCoat;
    element.querySelector('.wizard-eyes').style.fill = obj.colorEyes;
    return element;
  }

  function render(data) {
    var takeNumber = data.length > WIZADRLIST_COUNT ? WIZADRLIST_COUNT : data.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarList.appendChild(renderWizard(data[i]));
    }

    similar.classList.remove('hidden');
  }

  window.data = {
    renderWizard: renderWizard,
    render: render
  };
})();
