const nav = document.querySelector('.nav__bar')
const navBtn = document.querySelector('.nav__box-burger')
const allNavItems = document.querySelectorAll('.nav__item-mobile');
const handleNav = () => {
    nav.classList.toggle('active');
        allNavItems.forEach((item) => {
            item.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    
}
navBtn.addEventListener('click', handleNav);