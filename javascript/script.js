/** Pegar a Data */
function getData() {
    /*pegando o data inserida no input*/
    var data = document.getElementById("data").value;

    /*transformando em string*/
    var data_str = String(data);

    /*validando a data inserida para que ela não seja uma data que já passou*/
    if (data)
        if (new Date() < new Date(data_str)) {
            localStorage.setItem("data", data_str);
            window.location = 'counter.html'
        }
        else {
            openModal("Não é possível calcular com uma data anterior a de hoje!");
        }
    else {
        openModal("Esta data não existe!");
    }
}

/** Função Para Abrir e Fechar Modal */
function openModal(message) {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    //
    document.getElementById("message").innerText = message;

    // When the user clicks the button, open the modal 
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

/** Adicionando Zeros */
function zero(num) {
    return num < 10 ? "0" + num : num;
}

/** Contador */
function startCountDown(duration) {

    let secondsRemaining = duration;
    let countInterval = setInterval(function () {

        dias = parseInt(secondsRemaining / 60 / 60 / 24) + 1;
        horas = parseInt(secondsRemaining / 60 / 60 % 24);
        min = parseInt(secondsRemaining / 60 % 60);
        sec = parseInt(secondsRemaining % 60);

        element = document.querySelector('#count-down-timer');
        element.innerHTML =
            `
        <div class="counter">
            <h1 class="number">${zero(dias)}</h1>
            <h2 class="unidade">dias</h2>
        </div>
        <div class="counter">
            <h1 class="number">${zero(horas)}</h1>
            <h2 class="unidade">horas</h2>
        </div>
        <div class="counter">
            <h1 class="number">${zero(min)}</h1>
            <h2 class="unidade">minutos</h2>
        </div>
        <div class="counter">
            <h1 class="number">${zero(sec)}</h1>
            <h2 class="unidade">segundos</h2>
        </div>
        `;

        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining < 0) { clearInterval(countInterval) };

    }, 1000);
}

var data = localStorage.getItem("data");
var falta = (new Date(data).getTime() - new Date()) / 1000;

startCountDown(--falta);

/** Voltando Para a Home */
function goHome() {
    localStorage.removeItem("data")
    window.location = "index.html"
}