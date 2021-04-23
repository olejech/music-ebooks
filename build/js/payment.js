var form = document.querySelector('.payment-card__form')
var errorMessage = document.querySelector('.payment-card__right-error')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  errorMessage.classList.add('active')
})
