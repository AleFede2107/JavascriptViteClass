import './style.css'
import {Title, Menu} from './components/Title.js'
import Subtitle from'./components/Subtitle.js'

document.querySelector('#app').innerHTML = Title();
document.querySelector('#app').innerHTML += Title();
document.querySelector('#app').innerHTML += Subtitle('Federico');
document.querySelector('#app').innerHTML += Subtitle('Fernando');
document.querySelector('#app').innerHTML += Menu();
document.querySelector('#app').innerHTML += `
<section>
  <h2>Automatic theme</h2>
  <p>This is a Section</p>
</section>

<section class="light">
  <h2>Light theme</h2>
  <p>This is a Section</p>
</section>

<section class="dark">
  <h2>Dark theme</h2>
  <p>This is a Section</p>
</section>

<button type="button" id="theme-toggle">Change Theme</button>
`
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('light')
});