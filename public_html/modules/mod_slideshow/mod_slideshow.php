<?php
defined('_JEXEC') or die;

$doc =& JFactory::getDocument();
$doc->addStyleSheet( 'media/mod_slideshow/slideshow.css' );
$doc->addScript("media/mod_slideshow/slideshow.js");

require JModuleHelper::getLayoutPath('mod_slideshow', $params->get('layout', 'default'));
