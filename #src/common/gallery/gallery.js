{   
    let galleryBlocks = document.querySelectorAll('.gallery');
    if(galleryBlocks.length) {
        galleryBlocks.forEach(block => {
            let dataSlider = new Swiper(block.querySelector('.gallery__slider'), {
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
        
                slidesPerView: 1,
                spaceBetween: 30,
                speed: 800,
                watchSlidesVisibility: true,
                navigation: {
                    nextEl: block.querySelector('.gallery__slider-btn-next'),
                    prevEl: block.querySelector('.gallery__slider-btn-prev'),
                },
            });
        })
    }
}