document.addEventListener('DOMContentLoaded', function() {

  ymaps.ready(init);
  function init(){
      var myMap = new ymaps.Map("map", {
          center: [55.760216, 37.614770],
          zoom: 13,
          controls: [
          ]
      });
      var myPlacemark = new ymaps.Placemark([55.766228, 37.626969], {}, {
        iconLayout: 'default#image',
        iconImageHref: '/images/mapmarker.svg',
        iconImageSize: [12, 12],
        iconImageOffset: [-3, -42],
      });

      myMap.geoObjects.add(myPlacemark)
  }

  const validateAboutForm = new JustValidate('.about__form', {
    errorLabelStyle: {
      color: ''
    }
  });
  const validateContactsForm = new JustValidate('.contacts__form', {
    errorLabelStyle: {
      color: ''
    }
  });

  validateAboutForm
    .addField('#about__email', [
      {
        rule: 'required',
        errorMessage: 'Введите e-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
      }
    ]);

  validateContactsForm
    .addField('#contacts__form-name', [
      {
        rule: 'required',
        errorMessage: 'Введите имя',
      }
    ])
    .addField('#contacts__form-email', [
      {
        rule: 'required',
        errorMessage: 'Введите e-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
      },
    ]);

  // Animation

  const opennav = document.querySelector(".nav__btn-open");
  const closenav = document.querySelector(".nav__btn-close");
  const navToggle = gsap.timeline({paused: true});

  navToggle.to(".nav__menu", {
    duration: 0.5,
    display: "block",
    opacity: 1
  })
  opennav.onclick = function() {
    navToggle.play();
  }
  closenav.onclick = function() {
    navToggle.reverse();
  }

  const opensearch = document.querySelector(".header__btn-search-open");
  const closesearch = document.querySelector(".search-block__close");
  const searchToggle = gsap.timeline({paused: true});
  const mediaQuerymax968 = window.matchMedia('(min-width:968px)')

  if (mediaQuerymax968.matches) {
    searchToggle.to(".nav__menu", {
      duration: 0.1,
      display: "none",
      opacity: "0",
    })
  }

  searchToggle.fromTo(".header__search-block", {
    display: "none",
    opacity: "0"
  }, {
    display: "grid",
    opacity: 1
  })


  opensearch.onclick = function() {
    searchToggle.play();
  }
  closesearch.onclick = function() {
    searchToggle.reverse();
  }

  const closemapdesc = document.querySelector(".map-block__btn-close-btn");
  const mapdescclose = gsap.timeline({paused: true});

  mapdescclose.to(".map-block__desc-block", {
    duration: 0.2,
    opacity: 0,
    display: "none"
  })

  closemapdesc.onclick = function() {
    mapdescclose.play();
  }

})
