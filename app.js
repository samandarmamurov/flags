const btn = document.querySelector('.mode-btn')
const text = btn.querySelector('.mode-btn-text')

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark')

  if (document.body.classList.contains('dark')) {
    text.textContent = 'Dark Mode'
  } else {
    text.textContent = 'Dark Mode'
  }
})