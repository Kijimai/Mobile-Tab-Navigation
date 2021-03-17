const imageSelections = document.querySelectorAll('.content')
const navButtons = document.querySelectorAll('nav ul li')

navButtons.forEach((btn, idx) => {
  btn.addEventListener('click', function() {
    hideAllImages()
    hideAllItems()

    btn.classList.add('active')
    imageSelections[idx].classList.add('show')
  })
})

function hideAllImages() {
  imageSelections.forEach(content => {
    content.classList.remove('show')
  })
}

function hideAllItems() {
  navButtons.forEach(btn => {
    btn.classList.remove('active')
  })
}