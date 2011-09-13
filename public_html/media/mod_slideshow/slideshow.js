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

	var SimpleSlideShowDemo = new Class({
		Implements: [Options, Events],
		options: {
				slides: [],
				startIndex: 0,
				wrap: true
				//onShow: $empty
			
		},
		initialize: function(options) {
			this.setOptions(options)
			this.addSlides(this.options.slides);
			if(this.slides.length) this.showSlide(this.options.startIndex);
		},
		slides:[],
		addSlides: function(slides) {
			$$(slides).each(function(slide){
				this.slides.include($(slide));
				slide.addEvent('click', this.cycleForward.bind(this));
			}, this);
		},
		addSlide: function(slide){
			this.addSlides($splat($(slide)));
		},
		cycleForward: function() {
			if($chk(this.now) && this.now < this.slides.length-1) this.showSlide(this.now+1);
			else if ((this.now) && this.options.wrap) this.showSlide(0);
			else if(!$defined(this.now)) this.showSlide(this.options.startIndex);
		},
		cycleBack: function(){
			if(this.now > 0) this.showSlide(this.now-1);
			else if(this.options.wrap) this.showSlide(this.slides.length-1);
		},
		showSlide: function(iToShow){
			if (this.fading) return;
			var now = this.now;
			var currentSlide = this.slides[now];
			var slide = this.slides[iToShow];
			var fadeIn = function (s) {
				this.fading = true;
				s.setStyles({
					display:'block',
					visibility:'visible',
					opacity: 0
				});
				s.get('tween').start('opacity', 1).chain(function(){
					this.fading = false;
					this.fireEvent('onShow', [slide, iToShow]);
				}.bind(this));
			}.bind(this);
			if(slide) {
				if($chk(now) && now != iToShow){
					this.fading = true;
					currentSlide.get('tween').start('opacity', 0).chain(function(){
						currentSlide.setStyle('display', 'none');
						fadeIn(slide);
					}.bind(this));
				} else fadeIn(slide);
				this.now = iToShow;
			}						
		}
	});
	
	var SimpleImageSlideShowDemo = new Class({
		Extends: SimpleSlideShowDemo,
		options: {
			imgUrls:[],
			container: false
		},
		
	initialize: function(options){
		this.parent(options);
		this.container = $(this.options.container);
		if(!this.container) return;
		this.options.imgUrls.each(this.addImg.bind(this));
		this.showSlide(this.options.startIndex);
	},
	addImg: function(url){
		var img = new Element('img', {
						src: url,
						styles: {
								display: 'none'
						}
			}).inject($(this.options.container))
		this.addSlide(img);
	}

});