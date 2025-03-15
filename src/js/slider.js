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

$(document).ready(function () {
    console.log('Document ready, initializing FlexSlider and Bootstrap Modal');

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
        start: function (slider) {
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
        start: function (slider) {
            console.log('Reviews Slider initialized, slides:', slider.count);
        }
    });

    // Handle modal open event
    $('.image-modal-trigger').on('click', function (e) {
        e.preventDefault();
        const imageSrc = $(this).data('image-src');
        const caption = $(this).data('caption');
        console.log('Opening modal with image:', imageSrc, 'caption:', caption);

        $('#modalImage').attr('src', imageSrc);
        $('#imageModalLabel').text(caption);
        $('#imageModal').modal('show');
    });

    // Handle modal close event
    $('#imageModal').on('hidden.bs.modal', function () {
        console.log('Modal closed');
        $('#modalImage').attr('src', ''); // Clear image source
        $('#imageModalLabel').text(''); // Clear caption
    });
});