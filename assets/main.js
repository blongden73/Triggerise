var fakeAPI = {"global":{"active_rafikis":1251304,"number_of_services":790904,"tiko_miles":315425542},"ecosystems":[{"country":"Kenya","size":551},{"country":"India","size":228},{"country":"Ethiopia","size":77}]};


console.log('running');

//utils
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


//counter
window.onload = function() {

  //api
  console.log(fakeAPI);
  var homepage = fakeAPI.global.active_rafikis;
  var userTotal = fakeAPI.global.active_rafikis;
  var servicesTotal = fakeAPI.global.number_of_services;
  var partnersTotal = fakeAPI.ecosystems[0].size;
  var milesTotal = fakeAPI.global.tiko_miles;

  var home = document.querySelector('#countup');
  var impactTotal = document.querySelector('#total-users');
  var services = document.querySelector('#platform-services');
  var partners = document.querySelector('#partners');
  var miles = document.querySelector('#tiko-miles');

  if(home) {
    var countUp = new CountUp('countup', 2000, homepage);
    console.log(countUp);
    countUp.start();
  }
  if(impactTotal){
    var countUp = new CountUp('total-users', 2000, userTotal);
    console.log(countUp);
    countUp.start();
  }
  if(services){
    var countUp = new CountUp('platform-services', 2000, servicesTotal);
    console.log(countUp);
    countUp.start();
  }
  if(partners){
    var countUp = new CountUp('partners', 0, partnersTotal);
    console.log(countUp);
    countUp.start();
  }
  if(miles){
    var countUp = new CountUp('tiko-miles', 0, milesTotal);
    console.log(countUp);
    countUp.start();
  }
};

//carousel
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

//ecosystem
var map = document.querySelector('.ecosystem-map');
function scroll() {
  document.addEventListener('scroll', function(){
    if(elementInViewport(map)){
      map.classList.add('display');
    }
  });
}

new svgMap({
  targetElementID: 'svgMap',
  data: {
    data: {
      cities: {
        name: 'Cities',
        format:'{0}'
      },
      description: {
        format: '{0}'
      },
    },
    applyData: 'cities',
    values: {
      CM: {cities: 'Maroua, Lom-et-Djére, Haut-Nyong', description: 'Operational since 2018, our operations in Cameroon serve young girls and boys in the Far North and Eastern regions with SRH services. Funded by Cordaid, we have built an ecosystem with XYZ numbers of service providers connected to our platform in Cameroon.'},
    }
  }
});

function init(){
  if(map) {
    scroll();
  }
}init();
