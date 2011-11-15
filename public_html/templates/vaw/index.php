<!DOCTYPE html>
<html lang="en">
<head>
	<jdoc:include type="head" />
	
	<link rel="stylesheet" href="templates/vaw/css/template.css" type="text/css" />
	<link rel="shortcut icon" type="image/x-icon" href="/templates/vaw/images/favicon.ico" />
</head>

<body class="<?php echo $wide ?>">
	<div id="header"><div class="container">
		<jdoc:include type="modules" name="header" style="xhtml" />
		
	</div></div>
		
	<?php if ($this->countModules('masthead')): ?>
	<div id="masthead"><div class="container">
			<jdoc:include type="modules" name="masthead" style="xhtml" />
		
		<div class="clear"></div>
		<?php endif; ?>
	</div></div>
		
	<div id="body"><div class="container">
	<div id="component">
		<jdoc:include type="component" />
			
	</div>
	<div id="sidebar">
		<jdoc:include type="modules" name="sidebar" style="xhtml" />
		
	</div>
	<div class="clear"></div>		
	</div></div>
		
	<div id="footer"><div class="container">
		
		<jdoc:include type="modules" name="footer" style="xhtml" />
		
		<div class="floatleft">&copy; <?php echo date('Y') ?> SLCCVAW. All Rights Reserved.</div>
		<a href="http://ccistudios.com" target="_blank"><div class="floatright">Site by CCI Studios</a></div>
		
		<div class="clear"></div>
	</div></div>
		
</body>
</html>