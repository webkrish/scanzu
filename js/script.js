let navBar = document.getElementById("my-nav");
        window.onscroll = function () {
            if (window.scrollY > 22) {
                navBar.classList.add("scrolled");
            } else {
                navBar.classList.remove("scrolled");
            }
        };

        
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: true,
            loop: true,
            grabCursor:true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            breakpoints:{
                0:{
                    slidesPerView: 1,
                },
                580:{
                    slidesPerView: 2,
                },
                990:{
                    slidesPerView: 3,
                },
            }
        });