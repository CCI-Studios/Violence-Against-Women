window.addEvent('domready', function () {
	var slideshow = $('slideshow');
	var images = [
		'images/default/gallery/images.jpg',
		'images/default/gallery/logo-WMW-stacked-pos.jpg',
		'images/default/gallery/stop_violence_against_women_button-p145014020496895843t5sj_400.jpg'
	];
	var current = slideshow.getElement('.current');
	var previous = slideshow.getElement('.next');
	var active = -1;
	
	var dots = slideshow.getElement('.dots');
	
	for (i = 0; i < images.length; i++) {
		var index = i;
		var li = new Element('li');
		
		li.inject(dots);
		li.addEvent('click', function () {
			console.log('clicked: ' + index);
		});
	}
	
	var next = function () {
		active++;
		
		if (active == images.length) {
			active = 0;
		}
	}
	
	var prev = function () {
		active--;
		
		if (active < 0) {
			active = images.length - 1;
		}
	}
	
	var go = function () {
		next();
		previous.setStyle('opacity', 1);
		previous.src = images[active];
		
		var fx = new Fx.Tween(current, {
			property: 'opacity',
			onComplete: function () {
				var temp = current;
				current = previous;
				previous = temp;

				current.addClass('active');
				previous.removeClass('active');
			}
		});
		fx.start(0);
		
		go.delay(3000);
	}
	
	go();
	
});

var Slideshow = new Class({

});