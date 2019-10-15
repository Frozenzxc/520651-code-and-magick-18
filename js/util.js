'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    getRandomElm: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getRandomArrElms: function (arr, count) {
      var temp = arr;
      var result = [];
      for (var i = 0; i < count; i++) {
        var index = Math.floor(Math.random() * temp.length);
        result.push(temp[index]);
        temp.splice(index, 1);
      }
      return result;
    }
  };
})();
