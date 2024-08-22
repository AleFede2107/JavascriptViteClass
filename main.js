import './style.css'
import {Title, Menu} from './components/Title.js'
import Subtitle from'./components/Subtitle.js'

document.querySelector('#app').innerHTML = Title();
document.querySelector('#app').innerHTML += Title();
document.querySelector('#app').innerHTML += Subtitle('Federico');
document.querySelector('#app').innerHTML += Subtitle('Fernando');
document.querySelector('#app').innerHTML += Menu();
