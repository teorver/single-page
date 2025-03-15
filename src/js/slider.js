$(document).ready(function() {
    // Function to determine FlexSlider settings based on viewport
    function getSliderSettings() {
        const viewportWidth = $(window).width();
        if (viewportWidth <= 600) {
            return {
                itemWidth: viewportWidth, // Fit to viewport width
                maxItems: 1, // Show only 1 item on mobile
                move: 1
            };
        }
        return {
            itemWidth: 300, // Default item width for larger screens
            maxItems: 3, // Default for education slider
            move: 3
        };
    }

    // FlexSlider for Education
    $('.education-slider').flexslider({
        animation: 'slide',
        slideshow: false,
        itemWidth: getSliderSettings().itemWidth,
        itemMargin: 0,
        minItems: 1,
        maxItems: getSliderSettings().maxItems,
        move: getSliderSettings().move,
        controlNav: false,
        directionNav: true,
        start: function(slider) {
            console.log('Education Slider initialized, slides:', slider.count);
        },
        before: function(slider) {
            const settings = getSliderSettings();
            slider.vars.itemWidth = settings.itemWidth;
            slider.vars.maxItems = settings.maxItems;
            slider.vars.move = settings.move;
            slider.setup(); // Reinitialize slider with new settings
        }
    });

    // FlexSlider for Reviews
    $('.reviews-slider').flexslider({
        animation: 'slide',
        slideshow: false,
        itemWidth: getSliderSettings().itemWidth,
        itemMargin: 0,
        minItems: 1,
        maxItems: getSliderSettings().maxItems, // Default to 3, adjusted by getSliderSettings
        move: getSliderSettings().move,
        controlNav: false,
        directionNav: true,
        start: function(slider) {
            console.log('Reviews Slider initialized, slides:', slider.count);
        },
        before: function(slider) {
            const settings = getSliderSettings();
            slider.vars.itemWidth = settings.itemWidth;
            slider.vars.maxItems = settings.maxItems;
            slider.vars.move = settings.move;
            slider.setup(); // Reinitialize slider with new settings
        }
    });

    $('.image-viewer-trigger').on('click', function(e) {
        e.preventDefault();

        const $slider = $(this).closest('.flexslider');
        const images = $slider.find('.image-viewer-trigger').map(function() {
            return {
                src: $(this).data('image-src'),
                caption: $(this).data('caption')
            };
        }).get();

        const currentIndex = $slider.find('.image-viewer-trigger').index(this);
        let currentImageIndex = currentIndex;

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

        const imageContainer = $('<div>').addClass('image-viewer-container')
            .css({
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            });

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
            .on('click', function (e) {
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
            .on('click', function (e) {
                e.stopPropagation(); // Prevent closing the overlay
                currentImageIndex = (currentImageIndex + 1) % images.length;
                updateImage();
            });

        function updateImage() {
            const imageData = images[currentImageIndex];
            image.attr('src', imageData.src);
            console.log('Displaying image:', imageData.src);
        }
        updateImage();

        image.on('click', function(e) {
            e.stopPropagation();
            overlay.remove();
            console.log('Image viewer closed by clicking image');
        });

        overlay.on('click', function(e) {
            if (e.target === this) {
                overlay.remove();
                console.log('Image viewer closed by clicking outside');
            }
        });

        imageContainer.append(prevArrow).append(image).append(nextArrow);
        overlay.append(imageContainer);
        $('body').append(overlay);
    });
});
