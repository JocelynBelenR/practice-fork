window.onload = function () {
    var btn = document.getElementById ('button-change');
    var txt = document.getElementById('paragraph');
    var btnDos = document.getElementById('magic');
    var txtDos = getElementById('txt');

    btn.addEventListener ('click', function() {
        txt.innerHTML = '<h2>Git & Github Te Amamos </h2>';

     })

    btnDos.addEventListener('click', function () {
        // txtDos.innerHTML = '';
        txtDos.classList.add ('disappear');

     })
}