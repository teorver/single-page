$(document).ready(function() {
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
    });

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
        imageContainer.append(image);
        overlay.append(imageContainer);
        $('body').append(overlay);
    });
});
