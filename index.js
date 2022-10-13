
const picters = [
    './icons/lenovo.png',
    './icons/samsung.png',
    './icons/apple.png',
    './icons/viewSonic.png',
    './icons/bosch.png',
    './icons/hp.png',
    './icons/acer.png',
    './icons/sony.png',
    './icons/lenovo.png',
    './icons/samsung.png',
    './icons/apple.png'
]


const list = document.querySelector(".main-devices__list");
const template = document.querySelector("#template-list-item").content;
const blockText = document.querySelector(".main-devices__hidden-text");

const addElemHandler = ( elem )=> {

    picters.forEach( item => {
      const li = elem.cloneNode(true)
      li.children[0].style.backgroundImage = `url(${item})`;
      list.appendChild(li)
    })
}
addElemHandler(template);

const handlerAnimation = (e) => {
    if(!e.target.parentNode.classList.contains("main-devices__hidden_animate-to") ){
        e.target.parentNode.classList.remove("main-devices__hidden_animate-back") 
        e.target.parentNode.classList.add("main-devices__hidden_animate-to")
        setTimeout(function(){
            e.target.textContent ="Скрыть"
            // document.documentElement.style.cssText = "--angle: 45deg";
            document.documentElement.style.setProperty('--angle', '-135deg');
            document.documentElement.style.setProperty('--top-before', '6px');
            document.documentElement.style.setProperty('--top-after', '11px');
        }, 1000)
    } else {
        e.target.parentNode.classList.remove("main-devices__hidden_animate-to")
        e.target.parentNode.classList.add("main-devices__hidden_animate-back") 
        setTimeout(function(){
          e.target.textContent = "Показать все" 
            document.documentElement.style.setProperty('--angle', '45deg');
            document.documentElement.style.setProperty('--top-before', '3px');
            document.documentElement.style.setProperty('--top-after', '8px');
        }, 1000)
    }
}

blockText.addEventListener("click", function(e) {
    handlerAnimation(e)
})
blockText.addEventListener("keydown", function(e) {
    handlerAnimation(e)
})



  const slider = document.querySelector('.swiper');
  const container = document.querySelector('.main-devices__wrapper');
  const hidden = document.querySelector('.main-devices__hidden');

  
function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
   const mySwiper = new Swiper(slider, {
        // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerView: 'auto',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: -8,
    });
    // window.location.reload()
    hidden.classList.add("none")
    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767) {
    slider.dataset.mobile = 'false';
    container.classList.remove("swiper")
    list.classList.remove("swiper-wrapper")
    if (slider.classList.contains('swiper-initialized')) {
        mySwiper.destroy();
    
    }

  }
}

// mobileSlider()

window.addEventListener('DOMContentLoaded', () => {
  mobileSlider();
//   window.location.reload();
});

// const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'horizontal',
    // loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
      // touch keyboard
    //   clickable: true
    // },
//   
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    // колличество слайдеров пролистываемых
    // slidesPerView: 1,

    // autoHeighht: false,
    // breakpoints: {
        // when window width is >= 320px
        // 240: {
        //   slidesPerView: 1,
        //   spaceBetween: 0
        // },
        // when window width is >= 480px
        // 480: {
        //   slidesPerView: 1,
        //   spaceBetween: 24
        // },
        // when window width is >= 640px
        // 640: {
        //   slidesPerView: 1,
        //   spaceBetween: 240
        // }
    //   }
    // активный слайд по центру
    // centeredSlides: true,

    // отступы между слайдами
    // spaceBetween: -32,

// свободный режим
    // freeMode: true,
//   });