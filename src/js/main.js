// Node

// ???

// Variables and Constants

const headHTML = `
  `;

const bodyHTML = `
  <div class="navigation">
    <a class="nav" href="../index.html">Home</a>
  </div>
  `;

const head = document.getElementsByTagName("head");

const body = document.getElementsByTagName("body");

let timeout;

let testInp = '';

// Functions

function redirect(href) {
  window.location.href = href;
}

function load(href) {
  
  document.querySelector('body').style = "animation-name: unload;" + 
                                         "animation-duration: 0.5s;";
  
  timeout = setTimeout(redirect, 500, href);
  
}

function shortcut(key, altKey, href) {
  
  keyPressed = event.key == key || event.key == altKey
  
  current = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  
  if(keyPressed && href != current) window.location.href = href;
  
}

// Set Elements

for(let i = 0; i < head.length; i++) head[i].innerHTML += headHTML;

for(let i = 0; i < body.length; i++) body[i].innerHTML += bodyHTML;

// Events

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('body').style = "animation-name: load;" +
    "animation-duration: 0.75s;";
});
