const nome = prompt('Inserisci il tuo nome');
const sesso = prompt('Inserisci il tuo sesso');

const salutoDom = document.getElementById('saluto');
salutoDom.innerHTML = "Ciao " + nome;

if (sesso == 'm') {
    salutoDom.classList.add('maschio');
} else if (sesso == "f") {
    salutoDom.classList.add('femmina');
} else {
    salutoDom.classList.add('other');
}
 