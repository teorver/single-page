document.addEventListener("DOMContentLoaded",function(){let e=new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:3,slidesPerGroup:3,spaceBetween:40,pagination:{el:".swiper-pagination",clickable:!0}});document.querySelectorAll(".fancybox-item").forEach(n=>{n.addEventListener("click",()=>{currentSlideIndex=e.realIndex})}),Fancybox.bind('[data-fancybox="gallery"]',{Thumbs:{autoStart:!1},on:{close:()=>{document.activeElement.blur()}}})});