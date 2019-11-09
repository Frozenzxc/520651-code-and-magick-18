'use strict';

(function () {
  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };
  var fireball = document.querySelector('.setup-fireball-wrap');
  var wizardElement = document.querySelector('.setup-wizard');
  var setup = document.querySelector('.setup');

  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  wizardCoatElement.addEventListener('click', function () {
    var newColor = window.util.getRandomElm(window.MOCK.coatColor);
    wizardCoatElement.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  wizardEyesElement.addEventListener('click', function () {
    var newColor = window.util.getRandomElm(window.MOCK.eyesColor);
    wizardEyesElement.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  fireball.addEventListener('click', function () {
    var fireballColor = window.util.getRandomElm(window.MOCK.fireballColor);
    fireball.style.background = fireballColor;
    setup.querySelector('input[name = fireball-color]').value = fireballColor;
  });

  window.wizard = wizard;
})();
