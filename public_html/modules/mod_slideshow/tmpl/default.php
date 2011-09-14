<script>
var ss;
window.addEvent('domready', function() {
	ss = new SimpleImageSlideShow({
		imgUrls: [<?php

		$path = '/images/default/gallery/';
		$files = JFolder::files(JPATH_SITE .$path);
		foreach($files as $index=>$file) {
			echo "'".$path.$file."'";
			if($index != count($files)-1) {
				echo ',';
			}
		}
		
		?>],
		container: $('slideshow')
	});
	
	ss.start();
});
</script>

<div id="slideshow">
	<ul class="dots"></ul>
</div>
