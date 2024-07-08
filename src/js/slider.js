document.addEventListener('DOMContentLoaded', function () {
    // const images = document.querySelectorAll('.img__modifier');
    
    // images.forEach((img) => {
    //     EXIF.getData(img, function() {
    //         const orientation = EXIF.getTag(this, 'Orientation');
    //         let transform = '';
    //         switch (orientation) {
    //             case 2: transform = 'scaleX(-1)'; break;
    //             case 3: transform = 'rotate(180deg)'; break;
    //             case 4: transform = 'scaleY(-1)'; break;
    //             case 5: transform = 'rotate(90deg) scaleY(-1)'; break;
    //             case 6: transform = 'rotate(90deg)'; break;
    //             case 7: transform = 'rotate(270deg) scaleY(-1)'; break;
    //             case 8: transform = 'rotate(270deg)'; break;
    //         }
    //         if (transform) {
    //             img.style.transform = transform;
    //         }
    //     });
    // });
    
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal', // Default direction
        loop: true,
        slidesPerView: 3, // Show up to 4 elements
        slidesPerGroup: 3,
        spaceBetween: 40,

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    document.querySelectorAll('.fancybox-item').forEach(item => {
        item.addEventListener('click', () => {
            currentSlideIndex = swiper.realIndex;
        });
    });

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {
            autoStart: false
        },
        on: {
            close: () => {
                document.activeElement.blur(); // Remove focus from the currently focused element
            }
        }
    });
});
