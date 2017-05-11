<?php
$title = 'Rado’s copyright page';
require_once('includes/config.inc.php');
include_once('includes/header.inc.php');
?>

<section>
	<h2>About my site</h2>
	
	<p>I use <a href="http://www.apple.com/safari/">Safari</a> and <a href="http://www.getfirefox.com/">Firefox</a> for checking links and content. It is all written in <a href="http://www.w3.org/html5"><abbr title="HyperText Markup Language">HTML</abbr> 5</a> and <a href="http://www.w3.org/Style/CSS"><abbr title="Cascading Style Sheets">CSS</abbr>3</a>.</p>
	
	<figure><a href="http://validator.w3.org/check/referer"><img style="border:0;" src="http://www.w3.org/html/logo/badge/html5-badge-h-css3-semantics.png" width="165" height="64" alt="HTML5 Powered with CSS3 / Styling, and Semantics" title="HTML5 Powered with CSS3 / Styling, and Semantics"></a></figure>
	
	<figure><a href="http://jigsaw.w3.org/css-validator/check/referer"><img style="border:0;width:88px;height:31px;" src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" /></a></figure>
</section>

<hr />

<section>
	<h2>© Copyright</h2>
	
	<p>This web site, including all of its various pages and pictures and words and files, is copyright by Rado Faletič.</p>
	
	<p>© Rado Faletič, 1998–<?= date('Y') ?>.</p>
</section>

<?php
include_once('includes/footer.inc.php');
?>
