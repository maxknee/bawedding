'use strict';
const classList = document.getElementsByClassName('sec');
window.onscroll = function() {
  var nav = document.getElementById('menu');
  if (window.pageYOffset > 100) {
    nav.classList.add('fixed');
    document.getElementById('top-link').classList.remove('scroll-hide');
  } else {
    nav.classList.remove('fixed');
    [].forEach.call(classList, function(element) {
      element.classList.toggle('sec');
    });
    document.getElementById('top-link').classList.add('scroll-hide');
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
