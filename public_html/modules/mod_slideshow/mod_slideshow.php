<?php
defined('_JEXEC') or die;

require_once dirname(__FILE__).'/helper.php';

$doc =& JFactory::getDocument();
$doc->addStyleSheet( 'media/mod_slideshow/slideshow.css' );
$doc->addScript("media/mod_slideshow/slideshow.js");

$directory = $params->get('directory');
	
if(substr($directory, 0,1) != '/')
	$directory = '/'.$directory;
if(substr($directory, -1,1) != '/' )
	$directory = $directory.'/';

$images = modSlideshowHelper::getImages($directory);

require JModuleHelper::getLayoutPath('mod_slideshow', $params->get('layout', 'default'));