// $(document).ready(function() {
//     $('.education-slider').flexslider({
//         animation: 'slide',
//         slideshow: false,
//         itemWidth: 300, // Base width per item
//         itemMargin: 0,  // No margin to avoid gaps
//         minItems: 1,
//         maxItems: 3,    // Show 3 items
//         move: 3,        // Move 3 items at a time
//         controlNav: false,
//         directionNav: true,
//     });
//
//     $('.reviews-slider').flexslider({
//         animation: 'slide',
//         slideshow: false,
//         itemWidth: 300, // Base width per item
//         itemMargin: 0,  // No margin to avoid gaps
//         minItems: 1,
//         maxItems: 2,    // Show 2 items
//         move: 2,        // Move 2 items at a time
//         controlNav: false,
//         directionNav: true,
//     });
// });

$(document).ready(function() {
    console.log('Document ready, initializing FlexSlider and Custom Image Viewer');

    // FlexSlider for Education
    $('.education-slider').flexslider({
        animation: 'slide',
        slideshow: false,
        itemWidth: 300,
        itemMargin: 0,
        minItems: 1,
        maxItems: 3,
        move: 3,
        controlNav: false,
        directionNav: true,
        smoothHeight: true,
        start: function(slider) {
            console.log('Education Slider initialized, slides:', slider.count);
        }
    });

    // FlexSlider for Reviews
    $('.reviews-slider').flexslider({
        animation: 'slide',
        slideshow: false,
        itemWidth: 300,
        itemMargin: 0,
        minItems: 1,
        maxItems: 2,
        move: 2,
        controlNav: false,
        directionNav: true,
        smoothHeight: true,
        start: function(slider) {
            console.log('Reviews Slider initialized, slides:', slider.count);
        }
    });

    // Handle image viewer open event
    $('.image-viewer-trigger').on('click', function(e) {
        e.preventDefault();
        const imageSrc = $(this).data('image-src');
        const caption = $(this).data('caption');
        console.log('Opening image viewer with image:', imageSrc, 'caption:', caption);

        // Create overlay
        const overlay = $('<div>').addClass('image-viewer-overlay')
            .css({
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.8)',
                zIndex: 10000,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            });

        // Create image element
        const image = $('<img>').attr('src', imageSrc)
            .css({
                maxWidth: '90%',
                maxHeight: '90vh',
                borderRadius: '8px',
                cursor: 'pointer'
            })
            .on('click', function() {
                overlay.remove(); // Remove overlay and image on click
            });

        // Append to body
        $('body').append(overlay.append(image));

        // Optional: Log for debugging
        console.log('Image viewer displayed');
    });
});