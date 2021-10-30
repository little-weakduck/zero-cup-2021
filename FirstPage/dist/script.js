
  window.addEventListener('scroll', (e) => {
    let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  
    let $h1 = document.querySelector('h1')
    let $title = document.querySelector('#title')
    let $PIXAR = document.querySelector('#PIXAR')
    let $TextBg = document.querySelector('#text-bg')
    let $video = document.querySelector('#video')
  
    $title.style.opacity = 0
    $PIXAR.style.opacity = 0
    $TextBg.style.opacity = 0
  
  
    //h1逐渐消失
    if (scrolled <= 0.1) {
      $h1.style.opacity = (0.1 - scrolled) / 0.1
      $h1.style.marginTop = scrolled * 1000 * -1 + 'px'
    } else {
      $h1.style.opacity = 0
    }
    //video逐渐变大
    if (scrolled <= 0.1) {
      $('#video').fadeOut(1)
      $('#title').css('display', 'block')
    } else if (scrolled >= 0.7) {
      $('#video').fadeOut(800) 
    } else if (scrolled >= 0.5) {
      $('#video').fadeIn(500)
      $('#title').css('display', 'block')
      $video.style.height = '100%';
    }
    else {
      $('#video').fadeIn(500)
      $video.style.height = scrolled * 200 + '%'
    }
  
    //标题由大至小
    if (scrolled <= 0.5) {
      $title.style.opacity = 0
      $title.classList.add('transparent')
    } else if (scrolled >= 0.7) {
      $title.style.opacity = 1
      $PIXAR.style.opacity = 1
      $TextBg.style.opacity = 1
      $title.style.width = document.documentElement.clientWidth * (1 - scrolled) *(1 - scrolled) *30 + 'px';
    } else {
      $('#PIXAR').fadeIn(200)
      $title.style.opacity = 1
      $PIXAR.style.opacity = 1
      $TextBg.style.opacity = 0
      $title.style.width = document.documentElement.clientWidth * (1 - scrolled) *(1 - scrolled) * 30 + 'px';
    }})
