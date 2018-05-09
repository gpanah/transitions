import $ from 'jquery'
import './index.less'

const switchClass = function(event) {
  event.preventDefault()
  let backgroundImg = $('.bk-img')
  if (backgroundImg.length > 0) {
    backgroundImg.removeClass('bk-img').addClass('side-img')
  } else {
    $('.side-img').removeClass('side-img').addClass('bk-img')
  }
}

let el = $(`
  <div class="nav-wrapper">
    <div class="bk-img"><div>
    <nav>
      <ul class="header">
        <a id="switch" href="/"><li>Switch</li></a>
      </ul>
    </nav>
    <input type="file" accept="image/*" capture="camera/>
  </div>
`)
el.find('a').click(switchClass)
$('#app').append(el)
