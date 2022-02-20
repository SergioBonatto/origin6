// Abre e fecha o menu quando clicar no icone: Burger e X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

// Quando clicar em um item, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

// Sombra no Header qdo for dado o scroll na pagina
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

var changeHeaderWhenScroll = () => {
  if (window.scrollY >= navHeight) {
    // O scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // O scroll é menor que a altura do header
    header.classList.remove('scroll')
  }
}

// Testimonials carousel slider swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1.19,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// Scrollreveal: mostrar elementos qdo der scroll na pagina
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 600,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card, 
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

//Back to top button
const backToTopButton = document.querySelector('.back-to-top')

var backToTop = () => {
  if (scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// Menu ativo conforme seção visível na página
const sections = document.querySelectorAll('main section[id]')

var activateMenuAtCurrentSection = () => {
  /* divide a alura da tela em 8, multiplica por 4 e soma com o deslocamento do eixo Y */
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  /* Para cada item na lista de sessões seção */
  for (let section of sections) {
    /* Ele cria uma variável */
    const sectionTop = section.offsetTop /* define o topo da seção */
    const sectionHeight = section.offsetHeight /* define a altura da seção */
    const sectionId =
      section.getAttribute('id') /* seleciona as IDs das seções */

    /* Cria o ponto de controle inicial da função */
    /* que deve ser o checkpoin desde que ele seja maior ou igual ao topo da seção */
    const checkpointStart = checkpoint >= sectionTop
    /* cria o ponto de controle final da função */
    /* que será quando o checkpoint for menor que o tamanho do topo mais a altura da seção, pegando a parte bem de baixo */
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight
    /* Se o checkpoint estiver entre o checkpoint Start e o checkpointEnd */
    /* ou seja, com a seção visível */
    if (checkpointStart && checkpointEnd) {
      /* seleciona especificamente, na barra de navegação e dentro das listas, o link que tiver como referencia a id da seção visivel */
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.add('active')
    } else {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.remove('active')
    }
  }
}

//When scroll
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
