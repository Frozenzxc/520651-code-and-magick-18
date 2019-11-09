'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');
  var form = setup.querySelector('.setup-wizard-form');
  var wizards = [];

  function updateWizards() {
    var sameCoatAndEyesWizards = wizards.filter(function (it) {
      return it.colorCoat === coatColor &&
        it.colorEyes === eyesColor;
    });

    var sameCoatWizards = wizards.filter(function (it) {
      return it.colorCoat === coatColor;
    });
    var sameEyesWizards = wizards.filter(function (it) {
      return it.colorEyes === eyesColor;
    });
    var filteredWizards = sameCoatAndEyesWizards;
    filteredWizards = filteredWizards.concat(sameCoatWizards);
    filteredWizards = filteredWizards.concat(sameEyesWizards);
    filteredWizards = filteredWizards.concat(wizards);

    var uniqueWizards = filteredWizards.filter(function (it, i) {
      return filteredWizards.indexOf(it) === i;
    });
    window.data.render(uniqueWizards);
  }

  var coatColor;
  wizardCoat.addEventListener('click', function () {
    var newColor = window.util.getRandomElm(window.MOCK.coatColor);
    wizardCoat.style.fill = newColor;
    setup.querySelector('input[name = coat-color]').value = newColor;
    coatColor = newColor;
    updateWizards();
  });

  var eyesColor;
  wizardEyes.addEventListener('click', function () {
    var newColor = window.util.getRandomElm(window.MOCK.eyesColor);
    wizardEyes.style.fill = newColor;
    setup.querySelector('input[name = eyes-color]').value = newColor;
    eyesColor = newColor;
    updateWizards();
  });

  fireball.addEventListener('click', function () {
    var fireballColor = window.util.getRandomElm(window.MOCK.fireballColor);
    fireball.style.background = fireballColor;
    setup.querySelector('input[name = fireball-color]').value = fireballColor;
  });

  function onLoad(arr) {
    wizards = arr;
    window.data.render(wizards);
    updateWizards();
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
