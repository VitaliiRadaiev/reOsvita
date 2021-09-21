{
    let btnScrollDown = document.querySelector('.promo-header__scroll-down');
    if(btnScrollDown) {
        btnScrollDown.addEventListener('click', () => {
            window.scrollTo({
                top: document.documentElement.clientHeight,
                behavior: 'smooth'
            })
        })
    }
}