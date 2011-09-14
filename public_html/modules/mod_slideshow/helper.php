<?php
defined('_JEXEC') or die;

class modSlideshowHelper
{
	
	static function getImages($path) {
		$images = JFolder::files(JPATH_SITE .$path);
		return "['$path" .implode("', '$path", $images) ."']";
	}
	
}