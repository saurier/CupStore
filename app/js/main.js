const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
});


function toggle_order() {
  let blur = document.getElementById('blur');
  blur.classList.toggle('active');

  let popup = document.getElementById('popup-order');
  popup.classList.toggle('active');
}

function toggle_accept() {
  let popup = document.getElementById('popup-order');
  popup.classList.toggle('active');
  let popup_accepted = document.getElementById('popup-accepted');
  popup_accepted.classList.toggle('active');
}

function toggle_thankyou() {
  let blur = document.getElementById('blur');
  blur.classList.toggle('active');
  let popup_accepted = document.getElementById('popup-accepted');
  popup_accepted.classList.toggle('active');
}

/*------------------------------Sliders---------------------------------------*/
const swiper_home = new Swiper('.swiper-home', {
  direction: 'horizontal',
  loop: true,
  grabCursor: false,
  mousewheelControl: false,
  keyboardControl: false,
  allowTouchMove: false,
  lazyLoading: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 40,
  /*autoplay: {
    delay: 2000,
  }*/
})


const swiper_text = new Swiper('.swiper_text', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  allowTouchMove: false,
  spaceBetween: 10,
})

const swiper_img = new Swiper('.swiper__products', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,
  lazyLoading: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  /*spaceBetween: 20,*/
  /*autoplay: {
    delay: 2000,
  },*/
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 15,
    depth: 110,
    modifier: 2,
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


const swiper_detail = new Swiper('.swiper_detail', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,
  lazyLoading: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 40,
  /*autoplay: {
    delay: 2000,
  },*/
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

/*---------------Select-for-popup-order-start------------------------------*/

let x, i, j, length, selectEllength, selElmnt, a, b, c;
/* Look for any elements with the class "popup-order__row-custom-select": */
x = document.getElementsByClassName("popup-order__row-custom-select");
length = x.length;
for (i = 0; i < length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  selectEllength = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selectEllength; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  let x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect); 

/*------------------Select-for-popup-order-end---------------------*/