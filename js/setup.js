'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');

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
})();
