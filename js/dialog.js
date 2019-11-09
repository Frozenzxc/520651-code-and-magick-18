'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var dialogHandler = setup.querySelector('.upload');
  var similarBox = document.querySelector('.setup-similar');
  var form = setup.querySelector('.setup-wizard-form');
  similarBox.classList.remove('hidden');

  function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', function (evt) {
      window.util.isEscEvent(evt, closePopup);
    });
  }

  function closePopup() {
    setup.style = '';
    setup.classList.add('hidden');
    document.removeEventListener('keydown', function (evt) {
      window.util.isEscEvent(evt, closePopup);
    });
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
  });


  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (dragEvt) {
          dragEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

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

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function (response) {
      if (response) {
        setup.classList.add('hidden');
      }
    }, onError);
    evt.preventDefault();
  });

})();
