<script>
var ss;
window.addEvent('domready', function() {
	ss = new SimpleImageSlideShow({
		imgUrls: [
		'images/default/gallery/images.jpg',
		'images/default/gallery/logo-WMW-stacked-pos.jpg',
		'images/default/gallery/stop_violence_against_women_button-p145014020496895843t5sj_400.jpg'
		],
		container: $('slideshow')
	});
	
	ss.start();
});
</script>

<div id="slideshow">
	<img class="next" />
	<img class="current" />
	
	<ul class="dots"></ul>
</div>