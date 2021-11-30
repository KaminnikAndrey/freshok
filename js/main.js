$(function () {
  $('.slider').slick({
    arrows: true,
    dots: false,
    prevArrow: '<button class="slick-next slick__btn" type="button"><svg class="icon slick__svg slick__svg--left" style="width: 60px; height: 60px;"><use xlink:href="images/spriteimages/left.svg#left"></use></svg></button >',
    nextArrow: '<button class="slick-prev slick-btn" type="button"><svg class="icon slick__svg slick__svg--right" style="width: 60px; height: 60px;"><use xlink:href="images/spriteimages/left.svg#left"></use></svg></button >',
    responsive: [{
      breakpoint: 1540,
      settings: {
        arrows: false,
        dots: true,
      }
    }]
  });
  $('.partners__list').slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  // ток ошибки странные вылетают в консоль, но работает же)
  // правда ток на 1 работает, а я хз как на все сделать(all нельзя)
  document.querySelector('.card-product__counter--plus').addEventListener('click', plus);
  document.querySelector('.card-product__counter--minus').addEventListener('click', minus);

  let present = 0

  function plus() {
    if (present > 98) {
      alert('Число не может быть больше 99 или меньше 0, пожалуйста проверьте свое число')
      // я вот сделал, мне кажется что лучше же окно какое-то всплывающее сделать вместо алерта или алерт используется в реальности?
      any();
    }
    present = Number(present) + Number(1)
    console.log(present);
    document.querySelector('.card-product__counter--number').value = present;
    any();
  }

  function minus() {
    if (present < 1) {
      alert('Число не может быть больше 99 или меньше 0, пожалуйста проверьте свое число')
      any();
    }
    present = Number(present) - Number(1)
    console.log(present);
    document.querySelector('.card-product__counter--number').value = present;
    any();
  }

  document.querySelector('.icon--cart').addEventListener('click', cartadd);

  function cartadd() {
    document.querySelector('.cart').classList.toggle('cart--active');
  }

  document.querySelector('.cart__close').addEventListener('click', cartremove);

  function cartremove() {
    document.querySelector('.cart').classList.remove('cart--active');
  }

  document.querySelector('.icon-mobile--cart').addEventListener('click', cartMobileadd);

  function cartMobileadd() {
    document.querySelector('.cart-mobile').classList.toggle('cart-mobile--active');
  }

  document.querySelector('.cart__close-mobile').addEventListener('click', cartMobileremove);

  function cartMobileremove() {
    document.querySelector('.cart-mobile').classList.remove('cart-mobile--active');
  }

  document.querySelector('.header__products').addEventListener('click', catalogProducts);

  function catalogProducts() {
    document.querySelector('.catalog').classList.toggle('catalog--active');
    document.querySelector('.header__products').classList.toggle('header__products--active');
  }

  document.querySelector('.icon--search').addEventListener('click', searchtoggle);

  function searchtoggle() {
    document.querySelector('.header__search').classList.toggle('header__search--active');
  }

  document.querySelector('.header__top-mobile-left').addEventListener('click', menuadd);

  function menuadd() {
    document.querySelector('.mobile-navigation').classList.add('mobile-navigation--active');
    document.querySelector('.header__search').classList.remove('header__search--active');
  }

  document.querySelector('.close').addEventListener('click', menuremove);

  function menuremove() {
    document.querySelector('.mobile-navigation').classList.remove('mobile-navigation--active');
  }

  var homeProductsEl1 = document.querySelector('[data-ref="homeProducts-1"]');
  var homeDiscountsEl2 = document.querySelector('[data-ref="homeDiscounts-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(homeProductsEl1, config);
  var mixer2 = mixitup(homeDiscountsEl2, config);
})