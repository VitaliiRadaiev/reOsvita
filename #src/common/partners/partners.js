{
	const slider = document.querySelector('.partners__body');
	if(slider) {
		let mySwiper;

		function mobileSlider() {
			if(document.documentElement.clientWidth <= 991 && slider.dataset.mobile == 'false') {
				mySwiper = new Swiper(slider, {
                    autoplay: {
                        delay: 1,
                        disableOnInteraction: false,
                    },
					slidesPerView: 'auto',
                    freeMode: true,
					speed: 5000,
                    spaceBetween: 0,
                    loop: true,
				});

				slider.dataset.mobile = 'true';

				//mySwiper.slideNext(0);
			}

			if(document.documentElement.clientWidth > 991) {
				slider.dataset.mobile = 'false';

				if(slider.classList.contains('swiper-container-initialized')) {
					mySwiper.destroy();
				}
			}
		}

		mobileSlider();

		window.addEventListener('resize', () => {
			mobileSlider();
		})
	}

}