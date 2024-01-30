const swiper_text = new Swiper('.swiper_text', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    allowTouchMove: false,
    spaceBetween: 10,
  })
  const swiper_img = new Swiper('.swiper_products', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    lazyLoading: true,
    centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: 40,
    autoplay: {
      delay: 2000,
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 5,
      depth: 150,
      modifier: 3,
      slideShadows: false,
      scale: 1,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: swiper_text,
    },
  })