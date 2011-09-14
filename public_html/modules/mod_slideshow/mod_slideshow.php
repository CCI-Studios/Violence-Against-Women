<?php
defined('_JEXEC') or die;

$doc =& JFactory::getDocument();
$doc->addStyleSheet( 'media/mod_slideshow/slideshow.css' );
$doc->addScript("media/mod_slideshow/slideshow.js");

$path = '/images/default/gallery/';
$files = JFolder::files(JPATH_SITE .$path);
$images = '';
foreach($files as $index=>$file) {
	$images .= "'". $path.$file ."'";
	if($index != count($files)-1) {
		$images .= ',';
	}
}

$doc->addScriptDeclaration("
var ss;
window.addEvent('domready', function() {
	ss = new SimpleImageSlideShow({
		imgUrls: [$images],
		container: $('slideshow')
	});
	
	ss.start();
});
");

require JModuleHelper::getLayoutPath('mod_slideshow', $params->get('layout', 'default'));
