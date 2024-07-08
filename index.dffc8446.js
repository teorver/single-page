document.addEventListener("DOMContentLoaded",function(){// const images = document.querySelectorAll('.img__modifier');
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
let e=new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:3,slidesPerGroup:3,spaceBetween:40,// Pagination
pagination:{el:".swiper-pagination",clickable:!0}});document.querySelectorAll(".fancybox-item").forEach(n=>{n.addEventListener("click",()=>{currentSlideIndex=e.realIndex})}),Fancybox.bind('[data-fancybox="gallery"]',{Thumbs:{autoStart:!1},on:{close:()=>{document.activeElement.blur();// Remove focus from the currently focused element
}}})});