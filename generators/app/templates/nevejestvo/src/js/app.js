// import './lib/perlin';

import sliderWorks from './sliders/sliderWorks';

if ($('.js-slider-works').length){
	sliderWorks()
}


$('.js-hamburger').on('click', function(e) {
	e.preventDefault();
	$('.js-hamburger').toggleClass('active');
	$('.js-nav-mobile').toggleClass('active');
	$('.js-blurry').toggleClass('blurry');
});
