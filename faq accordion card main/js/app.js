const block = document.querySelectorAll('.block')
const title = document.querySelectorAll('.block__title')
const faq = document.querySelectorAll('.faq__title')

title.forEach((forTitle , i) => {
  title[i].addEventListener('click', () => {

    block.forEach((forBlock , i) => {
      block[i].classList.remove('activo')
      title[i].classList.remove('block__title--color')
    })
    block[i].classList.add('activo')
    title[i].classList.add('block__title--color')

    title[i].addEventListener('click', ()=> {
      block[i].classList.toggle('activo')
      title[i].classList.toggle('block__title--color')
    })
  })
})



