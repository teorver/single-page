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

        // Get all images in the same slider (for navigation)
        const $slider = $(this).closest('.flexslider');
        const images = $slider.find('.image-viewer-trigger').map(function() {
            return {
                src: $(this).data('image-src'),
                caption: $(this).data('caption')
            };
        }).get();

        // Get the current image index
        const currentIndex = $slider.find('.image-viewer-trigger').index(this);
        let currentImageIndex = currentIndex;

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

        // Create image container
        const imageContainer = $('<div>').addClass('image-viewer-container')
            .css({
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            });

        // Create image element
        const image = $('<img>').addClass('viewer-image')
            .css({
                maxWidth: '90%',
                maxHeight: '90vh',
                borderRadius: '8px',
                cursor: 'pointer',
                objectFit: 'cover',
                border: 'none'
            });

        // Create navigation arrows
        const prevArrow = $('<div>').addClass('image-viewer-arrow image-viewer-arrow-prev')
            .html('❮')
            .css({
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '40px',
                color: '#fff',
                cursor: 'pointer',
                opacity: 0.8,
                zIndex: 10001
            })
            .on('click', function(e) {
                e.stopPropagation(); // Prevent closing the overlay
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                updateImage();
            });

        const nextArrow = $('<div>').addClass('image-viewer-arrow image-viewer-arrow-next')
            .html('❯')
            .css({
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '40px',
                color: '#fff',
                cursor: 'pointer',
                opacity: 0.8,
                zIndex: 10001
            })
            .on('click', function(e) {
                e.stopPropagation(); // Prevent closing the overlay
                currentImageIndex = (currentImageIndex + 1) % images.length;
                updateImage();
            });

        // Function to update the image
        function updateImage() {
            const imageData = images[currentImageIndex];
            image.attr('src', imageData.src);
            console.log('Displaying image:', imageData.src);
        }

        // Initial image load
        updateImage();

        // Close on image click
        image.on('click', function(e) {
            e.stopPropagation(); // Prevent the overlay click handler from firing
            overlay.remove();
            console.log('Image viewer closed by clicking image');
        });

        // Close on overlay click (outside the image)
        overlay.on('click', function(e) {
            // Only close if the click target is the overlay itself
            if (e.target === this) {
                overlay.remove();
                console.log('Image viewer closed by clicking outside');
            }
        });

        // Append elements
        imageContainer.append(prevArrow).append(image).append(nextArrow);
        overlay.append(imageContainer);
        $('body').append(overlay);
    });
});
