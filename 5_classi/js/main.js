const elementoSpecifico = document.getElementById('primoElemento');
console.log(elementoSpecifico);

/* soluzione per il futuro! */
//const elementiDom = document.getElementsByClassName('elemento');
//console.log(elementiDom);


const primoLi = document.querySelector('li:last-child');
primoLi.style.color = 'green';