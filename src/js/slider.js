$(document).ready(function() {
    function getSliderSettings() {
        const viewportWidth = $(window).width();
        if (viewportWidth <= 600) {
            return {
                itemWidth: viewportWidth, 
                maxItems: 1,
                move: 1
            };
        }
        return {
            itemWidth: 300,
            maxItems: 3,
            move: 3
        };
    }

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
        before: function(slider) {
            const settings = getSliderSettings();
            slider.vars.itemWidth = settings.itemWidth;
            slider.vars.maxItems = settings.maxItems;
            slider.vars.move = settings.move;
            slider.setup();
        }
    });

    $('.reviews-slider').flexslider({
        animation: 'slide',
        slideshow: false,
        itemWidth: getSliderSettings().itemWidth,
        itemMargin: 0,
        minItems: 1,
        maxItems: getSliderSettings().maxItems,
        move: getSliderSettings().move,
        controlNav: false,
        directionNav: true,
        before: function(slider) {
            const settings = getSliderSettings();
            slider.vars.itemWidth = settings.itemWidth;
            slider.vars.maxItems = settings.maxItems;
            slider.vars.move = settings.move;
            slider.setup();
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
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '40px',
                color: '#fff',
                cursor: 'pointer',
                opacity: 0.8,
                zIndex: 10001
            })
            .on('click', function (e) {
                e.stopPropagation();
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                updateImage();
            });

        const nextArrow = $('<div>').addClass('image-viewer-arrow image-viewer-arrow-next')
            .html('❯')
            .css({
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '40px',
                color: '#fff',
                cursor: 'pointer',
                opacity: 0.8,
                zIndex: 10001
            })
            .on('click', function (e) {
                e.stopPropagation();
                currentImageIndex = (currentImageIndex + 1) % images.length;
                updateImage();
            });    

        function updateImage() {
            const imageData = images[currentImageIndex];
            image.attr('src', imageData.src);
        }
        updateImage();

        image.on('click', function(e) {
            e.stopPropagation();
            overlay.remove();
        });

        overlay.on('click', function(e) {
            if (e.target === this) {
                overlay.remove();
            }
        });

        imageContainer.append(prevArrow).append(image).append(nextArrow);
        overlay.append(imageContainer);
        $('body').append(overlay);
    });
});
