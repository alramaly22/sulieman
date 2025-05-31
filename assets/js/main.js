// ======================== LOADER ==================
// var loader = document.getElementById("preloader");
// window.addEventListener("load", function() {
//     setTimeout(() => {
//         loader.style.opacity = "0";
//         loader.style.transition = "opacity 1s ease";
//         setTimeout(() => {
//             loader.style.display = "none";
//         }, 1000);
//     }, 2000);
// });
// window.addEventListener("load", function() {
//     const loader = document.getElementById("preloader");
//     setTimeout(() => {
//         loader.classList.add("fade-out");
//     }, 3000); // wait 3s then fade out
// });
// top
// var loader = document.getElementById("preloader");
// window.addEventListener("load", function() {
//     setTimeout(() => {
//         loader.style.opacity = "0";
//         loader.style.transition = "opacity 0.6s ease";
//         setTimeout(() => loader.style.display = "none", 600);
//     }, 2000); // adjust timing as needed
// });

// var loader = document.getElementById("preloader");
// window.addEventListener("load", function() {
//     setTimeout(() => {
//         loader.style.opacity = "0";
//         loader.style.transition = "opacity 0.6s ease";
//         setTimeout(() => loader.style.display = "none", 600);
//     }, 2500);
// });


const loader = document.getElementById("preloader");
const letters = document.querySelectorAll(".letter");
const logo = document.querySelector(".logo-icon");
const spinner = document.querySelector(".loading-spinner");

function resetAnimations() {
    letters.forEach((letter, index) => {
        letter.style.animation = "none";
        void letter.offsetWidth;
        letter.style.animation = `drop-in 1s forwards`;
        letter.style.animationDelay = `${index * 0.1}s`;
    });

    logo.style.animation = "none";
    void logo.offsetWidth;
    logo.style.animation = "logo-in 0.6s forwards";
    logo.style.animationDelay = "2s";

    spinner.style.animation = "none";
    void spinner.offsetWidth;
    spinner.style.animation = "fade-in 0.5s forwards";
    spinner.style.animationDelay = "2.5s";
}

window.addEventListener("load", () => {
    let loopInterval = setInterval(() => {
        if (document.readyState === "complete") {
            loader.style.opacity = "0";
            loader.style.transition = "opacity 0.6s ease";
            setTimeout(() => loader.style.display = "none", 600);
            clearInterval(loopInterval);
        } else {
            resetAnimations();
        }
    }, 3500);
});
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    grabCursor: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: 'auto',
    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
});
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const counters = document.querySelectorAll('.stats__number');
const statsSection = document.querySelector('#stats');

let started = false;

const startCount = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // total duration for the count animation
        const increment = target / (duration / 16); // assuming 60fps => ~16ms per frame

        let count = 0;
        const update = () => {
            count += increment;
            if (count < target) {
                counter.textContent = Math.ceil(count);
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        };

        update();
    });
};


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            startCount();
            started = true;
        }
    });
}, { threshold: 0.5 });

observer.observe(statsSection);

const faqItems = document.querySelectorAll('.choose__faq-item')
    // 1.select each item
faqItems.forEach((item) => {
        const faqHeader = item.querySelector('.choose__faq-header')

        // select each button click
        faqHeader.addEventListener('click', () => {
            // select the current faq-open class
            const openItem = document.querySelector('.faq-open')
                // call the  toggleitem function
            toggleItem(item)
                // remove the faq-open class from other items
            if (openItem && openItem != item) {
                toggleItem(openItem)
            }
        })
    })
    // creat function to display the contect
const toggleItem = (item) => {
    // select each faq contecnt
    const faqContent = item.querySelector('.choose__faq-content')
        // if the same item contains the faq-open class ,remove
    if (item.classList.contains('faq-open')) {
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')

    } else {
        // add max-height to use the content and the faq-open class
        faqContent.style.height = faqContent.scrollHeight + 'px'
        item.classList.add('faq-open')
    }

}