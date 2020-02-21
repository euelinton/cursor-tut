let mouseCursor = document.querySelector('.cursor')
let navLinks = document.querySelectorAll('.nav-links li')
let images = document.querySelectorAll('.front-cover')

window.addEventListener('mousemove', e => {
  mouseCursor.style.top = `${e.pageY}px`
  mouseCursor.style.left = `${e.pageX}px` 
})

// Scale Effect in Navbar

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow')
    link.classList.add('hovered-link')
  })
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow')
    link.classList.remove('hovered-link')
  })
})

// Grayscale and Blur Effect in Img
images.forEach(img => {
  img.addEventListener('mouseover', e => {
    e.srcElement.classList.forEach(elm => {
      if(elm === 'cover-grayscale') {
        mouseCursor.classList.add('grayscale')  
      }
      if (elm === 'cover-blur') {
        mouseCursor.classList.add('blur')          
      }
    })
  })
  img.addEventListener('mouseleave', e => {
    e.srcElement.classList.forEach(elm => {
      if(elm === 'cover-grayscale') {
        mouseCursor.classList.remove('grayscale')
      }
      if (elm === 'cover-blur') {
        mouseCursor.classList.remove('blur')          
      }
    })
  })
})
