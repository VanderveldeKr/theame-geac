const swiper = new Swiper('.swiper', {
    // Опциональные параметры
    slidesPerView: 3,
    spaceBetween: 30,
    // Навигационные стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
    
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');

        // Проверка ширины экрана при изменении размера окна
        window.addEventListener('resize', function() {
            if (window.matchMedia('(max-width: 750px)').matches) {
                swiper.params.slidesPerView = 1;
            } else {
                swiper.params.slidesPerView = 3;
            }
            swiper.update(); // Обновление Swiper после изменения количества слайдов
            });
    
            // Проверка ширины экрана при загрузке страницы
            window.addEventListener('load', function() {
            if (window.matchMedia('(max-width: 750px)').matches) {
                swiper.params.slidesPerView = 1;
            } else {
                swiper.params.slidesPerView = 3;
            }
            });


// Получаем необходимые элементы
const mobileSearchIcon = document.querySelector('.mobile__search-icon');
const headerSearch = document.querySelector('.header-search');

// Функция для обработки клика
function handleClick(event) {
  if (!headerSearch.contains(event.target) && !mobileSearchIcon.contains(event.target)) {
    // Если клик был за пределами блока "header-search" и не на иконке "mobile__search-icon", скрываем блок
    headerSearch.classList.remove('active');
  } else if (mobileSearchIcon.contains(event.target)) {
    // Если клик был на иконке "mobile__search-icon", показываем блок
    headerSearch.classList.add('active');
  }
}

// Обработчик клика
document.addEventListener('click', handleClick);