window.addEventListener('DOMContentLoaded', function() {

// Navigation

  $(function(){
    $('.navigation__link-about').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#about-us').offset().top }, 500);
      e.preventDefault();
    });
  });

  $(function(){
    $('.navigation__link-gallery').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#gallery').offset().top }, 500);
      e.preventDefault();
    });
  });

  $(function(){
    $('.navigation__link-catalog').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#catalog').offset().top }, 500);
      e.preventDefault();
    });
  });

  $(function(){
    $('.navigation__link-events').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#events').offset().top }, 500);
      e.preventDefault();
    });
  });

  $(function(){
    $('.navigation__link-editions').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#editions').offset().top }, 500);
      e.preventDefault();
    });
  });

  $(function(){
    $('.navigation__link-projects').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#projects').offset().top }, 500);
      e.preventDefault();
    });
  });

  $(function(){
    $('.navigation__link-contacts').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 500);
      e.preventDefault();
    });
  });

  $(function(){
    $('.hero__btn-link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 500);
      e.preventDefault();
    });
  });


  // Header

  document.querySelector('.hat__btn-open').addEventListener('click', function () {
    document.querySelector('.navigation').classList.toggle('navigation_is-active')
    document.querySelector('.hat__btn-open').classList.toggle('btn-is-active')
    document.querySelector('.navigation__btn-close').classList.toggle('btn-is-disabled')
    document.querySelector('.navigation__btn-close').classList.toggle('btn-is-active')
    document.querySelector('.navigation__link-btn').classList.toggle('navigation__link-btn_active')
    document.querySelectorAll('.navigation__link').forEach(function (event) {
      event.classList.toggle('navigation__link_active')
    })
  })

  document.querySelector('.navigation__btn-close').addEventListener('click', function () {
    document.querySelector('.navigation').classList.toggle('navigation_is-active')
    document.querySelector('.hat__btn-open').classList.toggle('btn-is-active')
    document.querySelector('.navigation__btn-close').classList.toggle('btn-is-disabled')
    document.querySelector('.navigation__btn-close').classList.toggle('btn-is-active')
    document.querySelector('.navigation__link-btn').classList.toggle('navigation__link-btn_active')
    document.querySelectorAll('.navigation__link').forEach(function (event) {
      event.classList.toggle('navigation__link_active')
    })
  })

  document.querySelector('.hat__search').addEventListener('click', function () {
    document.querySelector('.search-block').classList.toggle('navigation_is-active')
    document.querySelector('.hat__search').classList.toggle('btn-is-active')
    document.querySelector('.search-block__input').classList.toggle('search-block__input_active')
    document.querySelector('.search-block__btn-close').classList.toggle('btn-is-disabled')
    document.querySelector('.search-block__btn-close').classList.toggle('btn-is-active')
    document.querySelector('.search-block__btn').classList.toggle('btn-is-disabled')
    document.querySelector('.search-block__btn').classList.toggle('btn-is-active')
  })

  document.querySelector('.search-block__btn-close').addEventListener('click', function () {
    document.querySelector('.hat__search').classList.toggle('btn-is-active')
    document.querySelector('.search-block__input').classList.toggle('search-block__input_active')
    document.querySelector('.search-block').classList.toggle('navigation_is-active')
    document.querySelector('.search-block__btn-close').classList.toggle('btn-is-disabled')
    document.querySelector('.search-block__btn-close').classList.toggle('btn-is-active')
    document.querySelector('.search-block__btn').classList.toggle('btn-is-disabled')
    document.querySelector('.search-block__btn').classList.toggle('btn-is-active')
  })



  document.querySelectorAll('.search-block__link').forEach(function (name) {
    name.addEventListener('click', function(event) {
      if ($(this).hasClass("search-block__link_active")) {
        $(".search-block__link").removeClass("search-block__link_active")
      } else {
        $(".search-block__link").removeClass("search-block__link_active")
        $(this).addClass("search-block__link_active")
      }
    })
  })

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    speed: 750,
    loop: true,
    autoplay: {
      delay: 5000
    },
  });

  // Gallery

  const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    sorter: () => {false},
   });

  const swiper2 = new Swiper('.swiper-container2', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    spaceBetween: 30,
  });

  document.querySelectorAll('.gallery__images-container').forEach(function(image) {
    image.addEventListener('click', function(event) {
      document.querySelector('.popup').classList.add('popup_active')
      document.querySelector('.popup__to-close').classList.remove('btn-is-disabled')

      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.popup__img').forEach(function(tabContent){
        tabContent.classList.remove('popup__img_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('popup__img_active')
    })
  })


  document.querySelector('.popup__to-close').addEventListener('click', function () {
    document.querySelector('.popup').classList.remove('popup_active')
    document.querySelector('.popup__to-close').classList.add('btn-is-disabled')
  })

  document.querySelectorAll('.gallery__images-container').forEach(function(image) {
    image.addEventListener('keypress', function(event) {
      document.querySelector('.popup').classList.add('popup_active')
      document.querySelector('.popup__to-close').classList.remove('btn-is-disabled')

      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.popup__img').forEach(function(tabContent){
        tabContent.classList.remove('popup__img_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('popup__img_active')
    })
  })


  document.querySelector('.popup__to-close').addEventListener('click', function () {
    document.querySelector('.popup').classList.remove('popup_active')
    document.querySelector('.popup__to-close').classList.add('btn-is-disabled')
  })

  // Catalog

  document.querySelectorAll('.catalog__button').forEach(function(country) {
    country.addEventListener('click', function(event) {
      document.querySelectorAll('.catalog__button').forEach(function(btnActive) {
        btnActive.classList.remove('catalog__button_active')
      })
      event.target.classList.add('catalog__button_active')

      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__info-block').forEach(function(tabContent){
        tabContent.classList.remove('catalog__info-block_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__info-block_active')
    })
  })

  $( function() {
    $( "#accordion1" ).accordion({
      active: 0,
      heightStyle: "content"
    });
  })

  $( function() {
    $( "#accordion2" ).accordion({
      collapsible: true,
      active: 0,
      heightStyle: "content"
    });
  })

  $( function() {
    $( "#accordion3" ).accordion({
      collapsible: true,
      active: 0,
      heightStyle: "content"
    });
  })

  $( function() {
    $( "#accordion4" ).accordion({
      collapsible: true,
      active: 0,
      heightStyle: "content"
    });
  })

  $( function() {
    $( "#accordion5" ).accordion({
      collapsible: true,
      active: 0,
      heightStyle: "content"
    });
  })

  document.querySelectorAll('.catalog__name').forEach(function(name) {
    name.addEventListener('click', function(event) {
      document.querySelectorAll('.catalog__name').forEach(function(nameActive) {
        nameActive.classList.remove('catalog__name_active')
      })
      event.target.classList.add('catalog__name_active')

      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__person-block').forEach(function(tabContent){
        tabContent.classList.remove('catalog__person-block_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__person-block_active')
    })
  })

  // Events

  const swiper3 = new Swiper('.swiper-container3', {
    // Optional parameters
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    spaceBetween: 30,
  });

  document.querySelector('.events__btn').addEventListener('click', function(event) {
    document.querySelectorAll('.event').forEach(function(active) {
      active.classList.add('event_active')
    })
    document.querySelector('.events__btn').classList.remove('events__btn_active')
  })

  // Editions

  const swiper5 = new Swiper('.editions__swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    spaceBetween: 30,
  });


  // Partners

  const swiper4 = new Swiper('.swiper-container4', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: false,
    spaceBetween: 30,
  });

  // Contacts

  type="text/javascript">
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.760960, 37.611446],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14,
            controls: [

            ]
        });

        var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
          iconLayout: 'default#image',
          iconImageHref: './img/mapmarker.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [-3, -42],
        });
        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myPlacemark);
    }

  var selector = document.querySelector("input[type='tel']");
   var im = new Inputmask("+7 (999) 999-99-99");
   im.mask(selector);

  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },

    messages: {
      name: {
        required: 'Как вас зовут?'
      },
      tel: {
        required: 'Укажите ваш телефон',
        function: 'Недопустимый формат'
      },
    },
  })

  document.querySelectorAll('.filtre-check__check').forEach(function (event) {
    event.addEventListener('keypress', function(checkAct) {
      if (checkAct.which === 13) {
        this.checked = !this.checked
      }
    })
  })

  window.addEventListener(`resize`, event => {

    document.querySelector(".editions__filtre-header").addEventListener("click", function() {
      document.querySelector(".editions__filtre-header").classList.toggle("editions__filtre-header_active")
      document.querySelectorAll(".editions__filtre").forEach(item => {
        item.classList.toggle("editions__filtre_active");
        if (item.querySelector(".filtre-check__check").checked) {
          item.classList.add("editions__filtre_active");
        }
      });
    });

    document.querySelectorAll(".filtre-check__check").forEach(item => {
      item.addEventListener("click", function() {
        if (!item.querySelector(".filtre-check__check").checked) {
          item.classList.remove("editions__filtre_active");
        }
      });
    });

  }, false);

  const mediaQuery = window.matchMedia('(max-width: 575px)')

    if (mediaQuery.matches) {
      document.querySelector(".editions__filtre-header").addEventListener("click", function() {
        document.querySelector(".editions__filtre-header").classList.toggle("editions__filtre-header_active")
        document.querySelectorAll(".editions__filtre").forEach(item => {
          item.classList.toggle("editions__filtre_active");
          if (item.querySelector(".filtre-check__check").checked) {
            item.classList.add("editions__filtre_active");
          }
        });
      });

      document.querySelectorAll(".filtre-check__check").forEach(item => {
        item.addEventListener("click", function() {
          if (!item.querySelector(".filtre-check__check").checked) {
            item.classList.remove("editions__filtre_active");
          }
        });
      });
    }
    $(function() {
      $('.simplebox').simplebox();
    });
})


