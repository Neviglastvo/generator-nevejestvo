import Swiper from "swiper";

export default function slider() {
	const swiper = new Swiper(".js-slider", {
		on: {
			init() {
				$(".swiper-slide-active").addClass("active");
			},
		},
		nested: true,
		slidesPerView: 3,
		spaceBetween: 15,
		initialSlide: 0,
		// loop: true,
		// loopedSlides: 20,
		freeMode: true,
		grabCursor: true,
		mousewheel: false,
		freeModeSticky: true,
		centeredSlides: true,
		parallax: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		// effect: 'coverflow',
		coverflowEffect: {
			rotate: 25,
			slideShadows: false,
			stretch: 20,
			depth: 20,
		},
		breakpoints: {
			1024: {
				slidesPerView: 2,
			},
			600: {
				slidesPerView: 1.25,
			},
		},
	});

	swiper.on("transitionStart", () => {
		$(".swiper-wrapper").find(".active").removeClass("active");
	});

	swiper.on("transitionEnd", () => {
		$(".swiper-slide-active").addClass("active");
	});
}
