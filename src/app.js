
/** data-theme */
const themeSelect = document.getElementById("theme-select")

themeSelect.addEventListener('change', (event) => {
  const theme = event.target.value
  document.body.classList.add('animate-all')
  document.documentElement.setAttribute('data-theme', theme)
  setTimeout(_ => document.body.classList.remove('animate-all'), 500)
})
