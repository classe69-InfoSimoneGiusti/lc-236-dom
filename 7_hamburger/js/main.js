document.getElementById('showMobileMenu').addEventListener('click', 
    function () {
        document.querySelector('.menuMobile').classList.add('showMenu');
    }
)

document.getElementById('closeMobileMenu').addEventListener('click', 
    function () {
        document.querySelector('.menuMobile').classList.remove('showMenu');
    }
)