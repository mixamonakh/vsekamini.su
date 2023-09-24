// ! кастомный дропдаун, при наведении на .dpn-hover вешает классы активности, удаляя при этом классы активности у другх дропдаунов
$('.dpn-hover').hover(function(){
    if( $(this).find('.dpn-btn').hasClass('active') ){
        $('.dpn-menu').removeClass('active');
        $('.dpn-btn').removeClass('active');
    }else{
        $(this).find('.dpn-btn').next().toggleClass('active');
        $(this).find('.dpn-btn').toggleClass('active');
    }
    if( $('body').width() < 1200 ){
      $(this).parents('.row').find('.menu-mobile-back').toggleClass('active');
    }
});
// ! скрипт что бы скрывать в планшете/мобилке дропдаун от бутстрапа с Информацией
if( $('body').width() < 1200 ){
  $('.dropdown-toggle').hover(function(){
    if( $(this).hasClass('show') ){
      $(this).parents('.row').find('.menu-mobile-back').removeClass('active');
    }else{
      $(this).parents('.row').find('.menu-mobile-back').addClass('active');
    }
  });
}


// ! скрипт для кнопки Назад, но он не имеет смысла если hover в скриптах выше будет отрабатывать
$('.menu-mobile-back').click(function(){
  $('.dpn-menu').removeClass('active');
  $('.dpn-btn').removeClass('active');
});

// ! отслеживаем изменения в поиске в header. Если введен текст, то вешем классы visible к элементам для появления дропдауна с результатами поиска и крестику

$('#header-search').keyup(function(){
    $('.search__close').addClass('visible');
    $('.search__dropdown').addClass('visible');
    if( $(this).val() ){
        $('.search__close').addClass('visible');
        $('.search__dropdown').addClass('visible');
    }else{
        $('.search__close').removeClass('visible');
        $('.search__dropdown').removeClass('visible');
    }
});

// ! инициализаци tooltip от бутстрап
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// !! инициализация слайдера Swiper для повторяющегося блока типа модуль ( хиты продажи, товары со скидкой и прочее)
var swiper = new Swiper(".module .swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 4,
  spaceBetween: 24,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

// ! инициализация слайдера Slick для блока акция
$('.stock__slider').slick({
  dots: true,
  infinite: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    }
  ]
});
// ! инициализация слайдера Slick для блока с отзывами
$('.review__slider').slick({
  dots: true,
  infinite: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: $('.slick-orange-arrows .prev'),
  nextArrow: $('.slick-orange-arrows .next'),
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});
// ! инициализация слайдера Slick для блока с мини карточками товара ( "Вы смотрели" на главной )
$('.watched__slider').slick({
  dots: false,
  infinite: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});


// ! перемещаем user-panel с кнпоками сравнение, корзина и прочие в фиксированный блок внизу экрана
  const getUserPanelBlock = $('.user-panel');
  if( $('body').width() < 1200 ){
    getUserPanelBlock.appendTo('.user-panel-mobile .container');
  }else {
    getUserPanelBlock.before($('.header-center__wrapper .search'));
  }

// ! перемещаем menu-catalog в обертку под мобильное меню
  const getMenuCatalogBlock = $('.menu-catalog');
  if( $('body').width() < 1200 ){
    getMenuCatalogBlock.appendTo('.menu-catalog-box');
  }else {
    getMenuCatalogBlock.prependTo($('.header-bot__wrapper'));
  }
// ! перемещаем menu в обертку под мобильное меню
const getMenuNavigationBlock = $('.menu');
if( $('body').width() < 1200 ){
  getMenuNavigationBlock.appendTo('.menu-navigation-box');
}else {
  getMenuNavigationBlock.before($('.header-top__wrapper .header-top__location'));
}
// ! перемещаем menu-mobile__contacts в мобильной версии в самый низ
const getMenuMobileContacts = $('.menu-mobile__contacts');
if( $('body').width() < 768 ){
  getMenuMobileContacts.appendTo('.menu-mobile-info');
}else {
  getMenuMobileContacts.before($('.menu-mobile .consultation'));
}
// ! перемещаем logo в мобильной версии в header-top
const getMenuMobileLogo = $('.logo');
if( $('body').width() < 768 ){
  $('.header-top__location').after(getMenuMobileLogo);
}else {
  getMenuMobileLogo.before($('.menu-mobile__btn'));
}

// ! Нажатие на кнопочку menu-mobile__btn открываеет мобильное меню и вешает класс на body что бы запретить скролл страницы
const getMenuMobileBtn = $('.menu-mobile__btn');
const getMenuMobile = $('.menu-mobile');

getMenuMobileBtn.click(function(){
  $('body').toggleClass('menu-mobile-overflow')
  $(this).toggleClass('active');
  getMenuMobile.toggleClass('active');
});

// ! скрипт для футера, для раскрытия списков в мобильной версии
const getButtonAcordionInFooter = $('.footer-accordion__name');
const getContentBlockAcordionInFooter = $('.footer-accordion__content');

if( $('body').width() < 768 ){
  getButtonAcordionInFooter.click(function(){
    $(this).toggleClass('active');
    $(this).parent().find(getContentBlockAcordionInFooter).toggleClass('active');
  });
}

// !! инициализация слайдера Swiper блока подкатегорий в каталоге
var swiper = new Swiper(".category .swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 4,
  spaceBetween: 24,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

// ! скрипты для изменения отображения карточек в каталоге с Карточки на Строчное
const categoryMainBlock = $('.category__main'); // ? блок с элементами Карточка товара

const getViewButtonsWrapper = $('.view-buttons__box'); // ? блок с кнопками переключения со Списка на Карточки
const getViewButtonCard = $('.view-buttons__cards'); // ? кнопка переключения на Карточки
const getViewButtonList = $('.view-buttons__list'); // ? кнопка переключения на Список

const getWrapperConsultationHardInCategory = $('.col-consultation'); // ? блок col в сетке, в котором находится модуль Бесплатная консультация

getViewButtonCard.click(function(){ // ? при клике на кнопку Карточки
  if( $(this).hasClass('active') ){ // ? если есть актив ничео не происходит
    return false
  }else{ // ? если нет
    getViewButtonsWrapper.find('a').removeClass('active'); // ? удаляем у обеих кнопок класс актив
    $(this).addClass('active'); // ? добавляем этой актив
    $(this).prependTo(getViewButtonsWrapper); // ? перемещаем ее на первое место
    categoryMainBlock.removeClass('list'); // ? удаляем у каталога класс Списка
    categoryMainBlock.find('.col-md-12').removeClass('col-md-12').addClass('col-md-4') // ? удаляем 12 колонок и возвращаем 4
    categoryMainBlock.find('.product-item').removeClass('product-item_list') // ? удаляем у карточек товара класс Списка
    getWrapperConsultationHardInCategory.removeClass('col-md-12').addClass('col-md-8') // ? удаляем у обертки под Модуль 12 колонок и возвращаем 8
  }
});
getViewButtonList.click(function(){ // ? при клике на кнопку Списка все тоже самое что и выше, только добавляем классы колонок
  if( $(this).hasClass('active') ){
    return false
  }else{
    getViewButtonsWrapper.find('a').removeClass('active');
    $(this).addClass('active');
    $(this).prependTo(getViewButtonsWrapper);
    categoryMainBlock.addClass('list');
    categoryMainBlock.find('.col-md-4').removeClass('col-md-4').addClass('col-md-12')
    categoryMainBlock.find('.product-item').addClass('product-item_list')
    getWrapperConsultationHardInCategory.addClass('col-md-12').removeClass('col-md-8')
  }
});


// ! слайдер в галерее на странице товара
var swiper = new Swiper(".product-gallery__mini", {
  loop: true,
  spaceBetween: 8,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product-gallery__images", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});