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
  var partnersTotalIndia = fakeAPI.ecosystems[1].size;
  var partnersTotalEthiopia = fakeAPI.ecosystems[2].size;
  var milesTotal = fakeAPI.global.tiko_miles;

  var home = document.querySelector('#countup');
  var impactTotal = document.querySelector('#total-users');
  var services = document.querySelector('#platform-services');
  var partners = document.querySelector('#partners');
  var partnersIndia = document.querySelector('#partners-india');
  var partnersEthiopia = document.querySelector('#partners-ethiopia');
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
  if(partnersIndia){
    var countUp = new CountUp('partners-india', 0, partnersTotalIndia);
    console.log(countUp);
    countUp.start();
  }
  if(partnersEthiopia){
    var countUp = new CountUp('partners-ethiopia', 0, partnersTotalEthiopia);
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
  fadingEffectKey: 'c2l0ZWxlYWYubmV0X2p2elptRmthVzVuUldabVpXTjBiQTE=',
  fadingEffect: true,
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

var worldMapCheck = document.querySelector('#svgMap');
function worldMap() {
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
        ET: {cities: 'Addis Ababa, Afar', description: 'Operational since 2016, our operations in Ethiopia serve young girls in Addis Ababa and Afar regions with SRH services. Funded by Rutgers and Embassy of Netherlands, Ethiopia, we have built an ecosystem with 77 numbers of service providers connected to our platform in Ethiopia.', Operations: 'Established in 2017, our Addis Ababa office provides regional support to operations in Ethiopia.'},
        IN: {cities: 'Agra, Ajmer, Alwar, Dausa, Delhi, Firozabad, Jaipur, Lucknow, New Delhi, Tonk', description: 'Operational since 2015, our operations in India serve young girls and mothers in Delhi, Rajasthan and Uttar Pradesh with SRH And ANC services. Funded by the Ministry of Foreign Affairs of the Netherlands and Grand Challenges Canada (GCC) have built an ecosystem with 228 numbers of service providers connected to our platform in India.', Operations: 'Established in 2017, our Addis Ababa officeEstablished in 2015, our New Delhi office provides regional support to operations in India.' },
        KE: {cities: 'Nairobi, Kisumu, Mombasa, Kajiado, Nakuru, Bungoma, Vihiga, Homa Bay, Busia, Siaya, Kisii, Nyamira, Kilifi, Kakamega, Kiambu, Mgori, Kericho, Uasin Gishu, Narok, Trans Nzoia. Nyeri, Embu, Laikipia, Kirinyaga, Nandi', description: 'Operational since 2015, our operations in Kenya serve young girls in over 15 counties with SRH services. Funded by the Children’s Investment Fund Foundation (CIFF) have built an ecosystem with 551numbers of service providers connected to our platform in Kenya.'},
        BF: {cities: 'Ouagadougou, Bobo Dioulasso', description: ' Scheduled to implement our platform in 2020, we aim to connect young girls in Ouagadougou and Bobo Dioulasso cities in Burkina Faso to various SRH services. Together with our partners, Planned Parenthood Global (PPG) and BURCASO, we are building ecosystems of service providers and youth in Burkina Faso.'},
        UG: {cities: 'Arua, Kimpala', description: 'Scheduled to implement our platform in 2020, we aim to connect young girls in Arua and Kampala districts of Uganda to various SRH services. Together with our partners, ThinkPlace and Reach a Hand Uganda, we are building ecosystems of service providers and youth in Uganda.'},
        US: {cities: 'Omaha', description: 'Scheduled to implement our platform in 2020, we aim to connect young girls in Omaha, Nebraska in the USA to various SRH services. Together with our partner, Women’s Fund Of Omaha, we are building ecosystems of service providers and youth in Omaha.'},
        PT: {cities: 'Porto', description: 'Established in 2014, our Porto office, called Triggerise Labs, serves as the global technology hub and supports all our operations.'},
        NL: {cities: 'Amsterdam', description: 'Established in 2014, our Amsterdam office is our registered headquarters and also provides global administrative support to all other offices.'},
        ZA: {cities: 'Cape Town', description: 'Established in 2014, our Cape Town office provides global executive support to our operations and technology teams.'},
      }
    }
  });
}

function init(){
  if(worldMapCheck){
    worldMap();
  }
  if(map) {
    scroll();
  }
}init();
