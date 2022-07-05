const generaNumeroDom = document.getElementById('generaNumero');

generaNumeroDom.addEventListener('click', 
    function () {
        //voglio un numero casuale compreso tra 20 ed 80
        let numeroCasuale = Math.floor(Math.random() * 61) + 20;
        alert(numeroCasuale);
    }
);