
var SimpleSlideShow = new Class({
	Implements: [Options, Events],
	
	options: {
		slides: [],
		startIndex: 0,
		wrap: true
		
		//onShow: $empty
	},
	slides: [],
	timer: null,
	cycle: null,
	
	initialize: function(options) {
		this.setOptions(options)
		
		// add slides specified in options
		this.addSlides(this.options.slides);
		
		// if you have slides, show the first one
		if(this.slides.length) {
			this.showSlide(this.options.startIndex);
		}
	},
	
	addSlides: function(slides) {
		$$(slides).each(function(slide){
			this.slides.include($(slide)); // only include once 
			
			slide.addEvent('click', this.cycleForward.bind(this)); // TODO
		}, this);
	},
	
	addSlide: function(slide){
		this.addSlides($splat($(slide))); // wrap individual in an array
	},
	
	cycleForward: function() {
		if($chk(this.now) && this.now < this.slides.length-1) {
			this.showSlide(this.now+1);
		} else if ((this.now) && this.options.wrap) { 
			this.showSlide(0);
		} else if(!$defined(this.now))  {
			this.showSlide(this.options.startIndex);
		}
	},
	
	cycleBack: function(){
		if(this.now > 0) {
			this.showSlide(this.now-1);
		} else if(this.options.wrap) {
			this.showSlide(this.slides.length-1);
		}
	},
	
	start: function (){
		this.cycleForward();
		
		if (!this.cycle) {
			this.cycle = function (slide, index) {
				this.timer = this.cycleForward.delay(3000, this);
			}.bind(this);
		}
		this.addEvent('onShow', this.cycle);
	},
	
	stop: function (){
		this.removeEvent('onShow', this.cycle);
		clearTimeout(this.timer);
	},
	
	showSlide: function(iToShow){
		if (this.fading) return;
		
		if (this.timer) {
			clearTimeout(this.timer);
		}
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
			} else {
				fadeIn(slide);
			}
			this.now = iToShow;
		}						
	}
});

var SimpleImageSlideShow = new Class({
	Extends: SimpleSlideShow,
	
	options: {
		imgUrls:[],
		container: false
	},
	list: null,
	
	initialize: function(options){
		this.parent(options);
		
		this.container = $(this.options.container);
		
		if(!this.container) {
			return;
		}
		
		this.list = this.container.getElement('.dots');
		
		this.addImgs(this.options.imgUrls)
		this.showSlide(this.options.startIndex);
	},
	
	addImgs: function (imgs) {
		imgs.each(function (img) {
			this.addImg(img);
		}, this);
	},
	
	addImg: function(url){
		var img = new Element('img', {
						src: url,
						styles: { display: 'none' }
			}).inject($(this.options.container))
		this.addSlide(img);
		
		var li = new Element('li');
		var current = this.slides.length - 1;	
		li.inject(this.list);
		li.addEvent('click', function () {
			this.showSlide(current);
		}.bind(this));
	}

});