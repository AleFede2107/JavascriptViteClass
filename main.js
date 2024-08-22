import './style.css'
import {Title, Menu} from './components/Title.js'
import Subtitle from'./components/Subtitle.js'

const tasks = [];

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

<h2>Task Manager</h2>
<form id="task-form">
  <input type="text" placeholder="Write a task" id="taskName"/>
  <textarea placeholder="Description" id="taskDescription"></textarea>
  <button type="submit">Add Task</button>
</form>

<ul id="task-list">
</ul>
`
const addTask = (event) =>{
  event.preventDefault()
  const taskInput = document.querySelector('#taskName').value
  const taskDescription = document.querySelector('#taskDescription').value

  const newTask = {
    title: taskInput,
    description: taskDescription
  }

  tasks.push(newTask)
  console.log(tasks)
}

document.querySelector('#task-form').addEventListener('submit', addTask);

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('light')
});