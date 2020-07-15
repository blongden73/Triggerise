console.log('running');

window.onload = function() {
  var countUp = new CountUp('countup', 2000, 1000000);
  console.log(countUp);
  countUp.start();
};

var myFullpage = new fullpage('#fullpage', {
	//Navigation
  licenseKey:'3B63225D-9F3C433A-BBF0651D-0A97F55E',
  autoScrolling:false,
	scrollHorizontally: true,
  fixedElements: '.site-header',
  offsetSections:true,
  slidesNavigation: true,
	slidesNavPosition: 'bottom',
  fadingEffect:'slides',
  controlArrows: false
});

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
};

var map = document.querySelector('.ecosystem-map');
console.log(map);

function scroll() {
  document.addEventListener('scroll', function(){
    if(elementInViewport(map)){
      map.classList.add('display');
    }
  });
}

function init(){
  scroll();
}init();
