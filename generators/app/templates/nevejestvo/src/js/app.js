// import './lib/perlin';

import slider from "./sliders/slider";

if ($(".js-slider-works").length) {
	slider();
}

$(".js-hamburger").on("click", (e) => {
	e.preventDefault();
	$(".js-hamburger").toggleClass("active");
	$(".js-nav-mobile").toggleClass("active");
	$(".js-blurry").toggleClass("blurry");
});
