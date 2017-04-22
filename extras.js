'use strict';

window.onscroll = function() {
  var nav = document.getElementById('menu');
  if ( window.pageYOffset > 100 ) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
};

function toggleMobile(id) {
  let classList = document.getElementsByClassName('sec');
  if (classList.length) {
    [].forEach.call(classList, function(element) {
      element.classList.toggle('sec');
    });
  }
  document.getElementById(id).classList.toggle('sec');
};
