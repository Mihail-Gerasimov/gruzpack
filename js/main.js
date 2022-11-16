const burgerBtn = document.querySelector('.nav__main--burger'),
    mobileMenu = document.querySelector('.nav__menu'),
    listItem = document.querySelector('.list-element');

burgerBtn.onclick = function () {
    mobileMenu.classList.toggle('nav__menu--active');
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos >= currentScrollPos) {
        mobileMenu.classList.remove('nav__menu--active');
    }
    prevScrollpos = currentScrollPos;
};

let btnContainer = document.querySelector('.transport__main--navigation');

let btns = btnContainer.querySelectorAll('.transport__main--navigation-btn');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("transport__main--navigation-btn_active");
        current[0].className = current[0].className.replace(" transport__main--navigation-btn_active", "");
        this.className += " transport__main--navigation-btn_active";
    });
}

let btnModal = document.querySelectorAll('[data-modal]'),
    closed = document.querySelector('.close'),
    modal = document.querySelector('.modal');

btnModal.forEach(item => {
    item.addEventListener('click', () => {
        modal.classList.add('modal-active');
    })
});

closed.addEventListener('click', () => {
    modal.classList.remove('modal-active');
});

// cLosed.onclick = function () {
//     modal.classList.remove('modal-active');
// };