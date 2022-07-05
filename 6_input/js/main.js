// al click su recuperoValori, voglio che si apra un alert 
// che mostri i valori inseriti in lista e numero

const recuperoValoriDom = document.getElementById('recuperoValori');

recuperoValoriDom.addEventListener('click', 
    function() {
        const numeroDom = document.getElementById('numero');
        const listaDom = document.getElementById('lista');
        alert('I valori inseriti sono: ' + numeroDom.value + ' e ' + listaDom.value);
    }
);