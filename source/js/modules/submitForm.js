import swal from "sweetalert";
import {Fancybox} from "@fancyapps/ui/src/Fancybox/Fancybox";
import debounce from "./debounce";

const submitForm = () => {
  const callbackForm = document.querySelector('.form--callback')
  const buttonSubmit = document.querySelector('.modal__button')

  const postData = async (url, data) => {
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: data
    })
  }

  callbackForm.addEventListener('submit', async (evt) => {
    evt.preventDefault()
    let formData = new FormData(callbackForm)
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    let showAlert = async (options) => {
      const {title, message, responseType} = options
      buttonSubmit.classList.remove('modal__button--loading')
      await swal(title, message, responseType)
    }

    buttonSubmit.classList.add('modal__button--loading')

    try {
      let response = await postData('./form.php', formDataJsonString)
      if (response.ok) {
        await showAlert({
          title: 'Yes',
          message: 'Мы скоро вам перезвоним',
          responseType: 'success'
        })
        callbackForm.reset()
        Fancybox.close()
      } else {
        await showAlert({
          title: 'Ouch',
          message: 'Something goes wrong!',
          responseType: 'error'
        })
      }
    } catch (e) {
      await showAlert({
        title: 'Ouch',
        message: 'Something goes wrong!',
        responseType: 'error'
      })
    }
  })
}

export default submitForm
