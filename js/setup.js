'use strict';

(function () {
  var WIZADRLIST_COUNT = 4;
  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');
  var wizardList = document.querySelector('.setup-similar-list');
  var form = setup.querySelector('.setup-wizard-form');

  wizardCoat.addEventListener('click', function () {
    var coatColor = window.util.getRandomElm(window.MOCK.coatColor);
    wizardCoat.style.fill = coatColor;
    setup.querySelector('input[name = coat-color]').value = coatColor;
  });

  wizardEyes.addEventListener('click', function () {
    var eyesColor = window.util.getRandomElm(window.MOCK.eyesColor);
    wizardEyes.style.fill = eyesColor;
    setup.querySelector('input[name = eyes-color]').value = eyesColor;
  });

  fireball.addEventListener('click', function () {
    var fireballColor = window.util.getRandomElm(window.MOCK.fireballColor);
    fireball.style.background = fireballColor;
    setup.querySelector('input[name = fireball-color]').value = fireballColor;
  });

  function onLoad(wizards) {
    var data = window.util.getRandomArrElms(wizards, WIZADRLIST_COUNT);
    data.forEach(function (item) {
      wizardList.appendChild(window.data.renderWizard(item));
    });

    setup.querySelector('.setup-similar').classList.remove('hidden');
  }

  function onError(errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.prepend(node);
  }

  window.backend.load(onLoad, onError);

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function (response) {
      if (response) {
        setup.classList.add('hidden');
      }
    }, onError);
    evt.preventDefault();
  });

})();
