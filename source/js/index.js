import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min'
import Inputmask from "inputmask/lib/inputmask"

import submitForm from "./modules/submitForm";

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fancyapps/ui/dist/fancybox.css'
import 'swiper/swiper-bundle.min.css'
import '../less/style.less'

import { createDefaultSwiper } from "./modules/slider"
import { customScroll } from "./utils"


document.querySelectorAll('a[href^="#"]').forEach((el) => {
  el.addEventListener('click',function (evt) {
    evt.preventDefault()
    customScroll(el.attributes.href.value, -95)
  })
})

document.addEventListener('DOMContentLoaded', () => {
  createDefaultSwiper({
    container: '.consumers__swiper',
    pagination: '.consumers-swiper-pagination',
    navNext: '.consumers-swiper-button-next',
    navPrev: '.consumers-swiper-button-prev',
  })

  if (window.innerWidth < 768) {
    document.querySelectorAll('.main-nav__item').forEach((el) => {
      el.addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.remove('show')
      })
    })
  }

  Inputmask({'mask': '+7 (999) 999-99-99'}).mask('.form__input--phone')
  submitForm();
})

if (module.hot) {
  module.hot.accept()
}
