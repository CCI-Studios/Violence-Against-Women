<script>
var ss;
window.addEvent('domready', function() {
	ss = new SimpleImageSlideShow({
		imgUrls: [
		'images/default/gallery/FCC.jpg',
		'images/default/gallery/BLUEWATERHEALTH.jpg',
		'images/default/gallery/RDFSO_LOGO.jpg',
		'images/default/gallery/SLCAS_LOGO.jpg',
		'images/default/gallery/SPS_CREST.jpg'
		],
		container: $('slideshow')
	});
	
	ss.start();
});
</script>

<div id="slideshow">
	<ul class="dots"></ul>
</div>
