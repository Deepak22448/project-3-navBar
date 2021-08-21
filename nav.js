const togglebtn = document.getElementsByClassName('toogle-btn')[0]
const links = document.getElementsByClassName('links')[0]

togglebtn.addEventListener('click', () =>   links.classList.toggle('active'))
