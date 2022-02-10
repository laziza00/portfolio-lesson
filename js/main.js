let elheaderbtn = document.getElementById('headerBtn');
let elheadermenu = document.getElementById('headerMenu');
let elIcon = document.getElementById('icon');

let count = 0;
elheaderbtn.addEventListener('click', function () {
  elheadermenu.classList.toggle('show');
  if (count == 0) {
    elheaderbtn.style.color = '#333D4B';
    elIcon.className = "bx bx-x";
    count++;
  } else {
    elheaderbtn.style.color = '#333D4B';
    elIcon.className = "bx bx-menu";
    count = 0;
  }
})