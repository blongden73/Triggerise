var fakeAPI = {"global":{"number_of_services":806481,"tiko_miles":3091350,"active_rafikis":1262372},"ecosystems":[{"country":"Kenya","size":555},{"country":"India","size":233},{"country":"Ethiopia","size":77}]};


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

  //not in API
  var serviceUptake = 91;
  var repeatBehaviour = 6;
  var providerRatings = 87;

  var home = document.querySelector('#countup');
  var impactTotal = document.querySelector('#total-users');
  var services = document.querySelector('#platform-services');
  var partners = document.querySelector('#partnersKenya');
  var partnersIndia = document.querySelector('#partners-india');
  var partnersEthiopia = document.querySelector('#partnersEthiopia');
  var miles = document.querySelector('#tiko-miles');
  var serviceUptakeSelect = document.querySelector('#serviceUptake');
  var repeatBehaviourSelect = document.querySelector('#repeatBehaviour');
  var providerRatingsSelect = document.querySelector('#providerRatings');

  ///THIS NEEDS REFACTOR

  if(home || impactTotal || services || partners || partnersIndia || partnersEthiopia || miles || serviceUptakeSelect || repeatBehaviourSelect || providerRatingsSelect){

    if(impactTotal && !impactTotal.classList.contains('counted')){
      impactTotal.classList.add('counted');
      var countUp = new CountUp('total-users', 2000, userTotal);
      console.log(countUp);
      countUp.start();
    }

    if(home && !home.classList.contains('counted')) {
      home.classList.add('counted');
      var countUp = new CountUp('countup', 2000, homepage);
      console.log(countUp);
      countUp.start();
    }

    document.addEventListener('scroll', function(){
      if(services && !services.classList.contains('counted')){
        if(elementInViewport(services)) {
          services.classList.add('counted');
          var countUp = new CountUp('platform-services', 2000, servicesTotal);
          console.log(countUp);
          countUp.start();
        }
      }
      if(partners && !partners.classList.contains('counted')){
        if(elementInViewport(partners)) {
          partners.classList.add('counted');
          var countUp = new CountUp('partnersKenya', 0, partnersTotal);
          console.log(countUp);
          countUp.start();
        }
      }
      if(partnersIndia && !partnersIndia.classList.contains('counted')){
        if(elementInViewport(partnersIndia)) {
          partnersIndia.classList.add('counted');
          var countUp = new CountUp('partners-india', 0, partnersTotalIndia);
          console.log(countUp);
          countUp.start();
        }
      }
      if(partnersEthiopia && !partnersEthiopia.classList.contains('counted')){
        if(elementInViewport(partnersEthiopia)) {
          partnersEthiopia.classList.add('counted');
          var countUp = new CountUp('partnersEthiopia', 0, partnersTotalEthiopia);
          console.log(countUp);
          countUp.start();
        }
      }
      if(miles && !miles.classList.contains('counted')){
        if(elementInViewport(miles)) {
          miles.classList.add('counted');
          var countUp = new CountUp('tiko-miles', 0, milesTotal);
          console.log(countUp);
          countUp.start();
        }
      }
      if(serviceUptakeSelect && !serviceUptakeSelect.classList.contains('counted')){
        if(elementInViewport(serviceUptakeSelect)) {
          serviceUptakeSelect.classList.add('counted');
          var countUp = new CountUp('serviceUptake', 0, serviceUptake);
          console.log(countUp);
          countUp.start();
        }
      }
      if(repeatBehaviourSelect && !repeatBehaviourSelect.classList.contains('counted')){
        if(elementInViewport(repeatBehaviourSelect)) {
          repeatBehaviourSelect.classList.add('counted');
          var countUp = new CountUp('repeatBehaviour', 0, repeatBehaviour);
          console.log(countUp);
          countUp.start();
        }
      }
      if(providerRatingsSelect && !providerRatingsSelect.classList.contains('counted')){
        if(elementInViewport(providerRatingsSelect)) {
          providerRatingsSelect.classList.add('counted');
          var countUp = new CountUp('providerRatings', 0, providerRatings);
          console.log(countUp);
          countUp.start();
        }
      }
    });
  }
};

//carousel
var myFullpage = new fullpage('#fullpage', {
	//Navigation
  licenseKey:'3B63225D-9F3C433A-BBF0651D-0A97F55E',
  fadingEffectKey: 'c2l0ZWxlYWYubmV0X2p2elptRmthVzVuUldabVpXTjBiQTE=',
  fitToSection: false,
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
    flagType: 'emoji',
    mouseWheelZoomEnabled: false,
    noDataText: 'We have no projects here',
    data: {
      data: {
        cities: {
          name: 'Cities',
          format:'{0}'
        },
        description: {
          name: 'Operations',
          format: '{0}'
        },
        office: {
          name: 'Office',
          format: '{0}'
        },
        project: {
          name: 'Project',
          format: '{0}'
        }
      },
      applyData: 'cities',
      values: {
        CM: {
          project:'—',
          office:'—',
          cities: 'Maroua, Lom-et-Djére, Haut-Nyong',
          description: 'Operational since 2018, our operations in Cameroon serve young girls and boys in the Far North and Eastern regions with SRH services. Funded by Cordaid, we have built an ecosystem with XYZ numbers of service providers connected to our platform in Cameroon.'
          },
        ET: {
          project:'—',
          cities: 'Addis Ababa, Afar',
          description: 'Operational since 2016, our operations in Ethiopia serve young girls in Addis Ababa and Afar regions with SRH services. Funded by Rutgers and Embassy of Netherlands, Ethiopia, we have built an ecosystem with 77 numbers of service providers connected to our platform in Ethiopia.',
          office: 'Established in 2017, our Addis Ababa office provides regional support to operations in Ethiopia.'
            },
        IN: {
          project:'—',
          cities: 'Agra, Ajmer, Alwar, Dausa, Delhi, Firozabad, Jaipur, Lucknow, New Delhi, Tonk',
          description: 'Operational since 2015, our operations in India serve young girls and mothers in Delhi, Rajasthan and Uttar Pradesh with SRH And ANC services. Funded by the Ministry of Foreign Affairs of the Netherlands and Grand Challenges Canada (GCC) have built an ecosystem with 228 numbers of service providers connected to our platform in India.',
          office: 'Established in 2017, our Addis Ababa officeEstablished in 2015, our New Delhi office provides regional support to operations in India.' },
        KE: {
          project:'—',
          cities: 'Nairobi, Kisumu, Mombasa, Kajiado, Nakuru, Bungoma, Vihiga, Homa Bay, Busia, Siaya, Kisii, Nyamira, Kilifi, Kakamega, Kiambu, Mgori, Kericho, Uasin Gishu, Narok, Trans Nzoia. Nyeri, Embu, Laikipia, Kirinyaga, Nandi',
          description: 'Operational since 2015, our operations in Kenya serve young girls in over 15 counties with SRH services. Funded by the Children’s Investment Fund Foundation (CIFF) have built an ecosystem with 551 service providers connected to our platform in Kenya.',
          office:'Established in 2015, our Nairobi office provides regional support to operations in Burkina Faso, Cameroon, Democratic Republic of Congo and Kenya.'},
        BF: {
          office:'—',
          description:'—',
          cities: 'Ouagadougou, Bobo Dioulasso',
          project: ' Scheduled to implement our platform in 2020, we aim to connect young girls in Ouagadougou and Bobo Dioulasso cities in Burkina Faso to various SRH services. Together with our partners, Planned Parenthood Global (PPG) and BURCASO, we are building ecosystems of service providers and youth in Burkina Faso.'},
        UG: {
          office:'—',
          description:'—',
          cities: 'Arua, Kimpala',
          project: 'Scheduled to implement our platform in 2020, we aim to connect young girls in Arua and Kampala districts of Uganda to various SRH services. Together with our partners, ThinkPlace and Reach a Hand Uganda, we are building ecosystems of service providers and youth in Uganda.'},
        US: {
          office:'—',
          description:'—',
          cities: 'Omaha',
          project: 'Scheduled to implement our platform in 2020, we aim to connect young girls in Omaha, Nebraska in the USA to various SRH services. Together with our partner, Women’s Fund Of Omaha, we are building ecosystems of service providers and youth in Omaha.'},
        PT: {
          office:'—',
          project:'—',
          cities: 'Porto',
          description: 'Established in 2014, our Porto office, called Triggerise Labs, serves as the global technology hub and supports all our operations.'},
        NL: {
          description:'—',
          project:'—',
          cities: 'Amsterdam',
          office: 'Established in 2014, our Amsterdam office is our registered headquarters and also provides global administrative support to all other offices.'},
        ZA: {
          description:'—',
          project:'—',
          cities: 'Cape Town',
          office: 'Established in 2014, our Cape Town office provides global executive support to our operations and technology teams.'},
      }
    }
  });
}
function classLists() {
  console.log('countries')
  document.querySelector('#svgMap-map-country-CM').classList.add('operation');
  document.querySelector('#svgMap-map-country-ZA').classList.add('office');
  document.querySelector('#svgMap-map-country-NL').classList.add('office');
  document.querySelector('#svgMap-map-country-US').classList.add('project');
  document.querySelector('#svgMap-map-country-PT').classList.add('operation');
  document.querySelector('#svgMap-map-country-UG').classList.add('project');
  document.querySelector('#svgMap-map-country-BF').classList.add('project');
  document.querySelector('#svgMap-map-country-KE').classList.add('operation-office');
  document.querySelector('#svgMap-map-country-IN').classList.add('operation-office');
  document.querySelector('#svgMap-map-country-ET').classList.add('operation-office');
  document.querySelector('#svgMap-map-country-CM').classList.add('operation');
}

function init(){
  if(worldMapCheck){
    worldMap();
    classLists();
  }
  if(map) {
    scroll();
  }
}init();
