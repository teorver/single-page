$(document).ready(function() {
    $('.education-slider').flexslider({
        animation: 'slide',
        slideshow: false,
        itemWidth: 300, // Base width per item
        itemMargin: 0,  // No margin to avoid gaps
        minItems: 1,
        maxItems: 3,    // Show 3 items
        move: 3,        // Move 3 items at a time
        controlNav: false,
        directionNav: true,
    });

    $('.reviews-slider').flexslider({
        animation: 'slide',
        slideshow: false,
        itemWidth: 300, // Base width per item
        itemMargin: 0,  // No margin to avoid gaps
        minItems: 1,
        maxItems: 2,    // Show 2 items
        move: 2,        // Move 2 items at a time
        controlNav: false,
        directionNav: true,
    });

    // Initialize Magnific Popup for image galleries
    // $('.image-gallery').magnificPopup({
    //     type: 'image',
    //     gallery: {
    //         enabled: true,
    //         navigateByImgClick: true,
    //         preload: [0, 1]
    //     },
    //     image: {
    //         titleSrc: function(item) {
    //             return item.el.find('img').attr('alt');
    //         }
    //     },
    //     removalDelay: 300,
    //     mainClass: 'mfp-fade',
    //     closeOnContentClick: true,
    //     closeBtnInside: true,
    //     disableOn: 0, // Always enable popup
    //     callbacks: {
    //         beforeOpen: function() {
    //             console.log('Magnific Popup opening for:', this.st.el[0].href);
    //         },
    //         open: function() {
    //             console.log('Magnific Popup opened, content:', $('.mfp-content').html());
    //         },
    //         beforeClose: function() {
    //             console.log('Magnific Popup closing');
    //         },
    //         error: function() {
    //             console.error('Magnific Popup error:', this);
    //         }
    //     }
    // }).on('click', function(e) {
    //     e.preventDefault();
    //     console.log('Triggering Magnific Popup for:', $(this).attr('href'));
    //     $(this).magnificPopup('open');
    // });
    $('.image-gallery').magnificPopup({
        type: 'image',
        gallery: {enabled: true},
        callbacks: {
            beforeOpen: function () {
                console.log('Opening:', this.st.el[0].href);
            },
            open: function () {
                console.log('Opened:', $('.mfp-img').attr('src'));
            },
            error: function () {
                console.error('Error:', this);
            }
        }
    }).on('click', function (e) {
        e.preventDefault();
        $(this).magnificPopup('open');
    });
});