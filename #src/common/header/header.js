{
    // === Burger Handler =====================================================================
	function burgerBtnAnimation(e) {
        document.querySelector('.burger span:nth-child(1)').classList.toggle('first');
        document.querySelector('.burger span:nth-child(2)').classList.toggle('second');
        document.querySelector('.burger span:nth-child(3)').classList.toggle('third');
        document.querySelector('.burger span:nth-child(4)').classList.toggle('fourth');
	}
// === Burger Handler =====================================================================	



    let header = document.querySelector('.header');
    if(header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('is-scroll', window.pageYOffset > 50);
        })
    }

    let navbarToggle = document.querySelector('.header .burger');
    let menu = document.querySelector('.header__menu');
    if(navbarToggle && menu) {
        navbarToggle.addEventListener('click', () => {
            header.classList.toggle('menu-is-open');
            menu.classList.toggle('open');
            document.body.classList.toggle('lock');
            burgerBtnAnimation();
        })

        const setMenuHeight = () => {
            if(document.documentElement.clientWidth < 992) {
                menu.style.height = document.documentElement.clientHeight - header.clientHeight + 'px';
            }
        }

        setMenuHeight();
        let id = setInterval(setMenuHeight, 200);
        setTimeout(() => {
            clearInterval(id);
        }, 1000)
        window.addEventListener('resize', setMenuHeight);
        window.addEventListener('scroll', setMenuHeight);
    }

    let navItems = document.querySelectorAll('.menu-item-has-children');
    if(navItems.length) {
        navItems.forEach(item => {
            let link = item.querySelector('.nav-link');
            let subMenu = item.querySelector('.sub-menu');

            if(link && subMenu) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    _slideToggle(subMenu);

                    navItems.forEach(i => {
                        if(i === item) return;

                        let subMenu = i.querySelector('.sub-menu');
                        _slideUp(subMenu);
                    })
                })
            }
        })
    }
}