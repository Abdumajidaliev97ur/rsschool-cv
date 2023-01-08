const accordion = document.getElementsByClassName('prices__accardion-box');
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    });
}

function show(anything) {
    document.querySelector('.textBox').value = anything;
}
let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function () {
    dropdown.classList.toggle('newActive');
}