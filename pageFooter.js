module.exports = {
	get: function (hook, filePath, googleAnalyticsIdentifier, jQueryVersion, boostrapVersion) {
		var footerHTML = '<footer id="footer" class="text-center container">\n';
		footerHTML += '	<div class="col-md-8 col-md-offset-2">\n';
		footerHTML += '		<p>\n';
		if (hook != 'error' && hook != 'photos') {
			const fs = require('fs');
			var fileStats = fs.lstatSync(filePath);
			var mTime = fileStats.mtime;
			footerHTML += '			Last modified: ' + mTime.toLocaleString('en-AU', { 'timeZone': 'Australia/Sydney', 'hour12': true, 'weekday': 'long', 'year': 'numeric', 'month': 'long', 'day': 'numeric', 'hour': 'numeric', 'minute': '2-digit', 'second': '2-digit', 'timeZoneName': 'short' }) + ' by Rado Faletič.<br />\n';
		}
		footerHTML += '			<a class="img" href="http://validator.w3.org/check/referer"><img style="border:0;width:80px;height:31px;" src="http://www.w3.org/html/logo/badge/html5-badge-h-css3-semantics.png" width="80" height="31" alt="HTML5 Powered with CSS3 / Styling, and Semantics" title="HTML5 Powered with CSS3 / Styling, and Semantics"></a>\n';
		footerHTML += '			<a class="img" href="http://jigsaw.w3.org/css-validator/check/referer"><img style="border:0;width:88px;height:31px;" width="88" height="31" src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" /></a>\n';
		footerHTML += '		</p>\n';
		footerHTML += '	</div>\n';
		footerHTML += '</footer>\n';
		
		footerHTML += '<script src="https://ajax.googleapis.com/ajax/libs/jquery/' + jQueryVersion + '/jquery.min.js"></script>\n';
		footerHTML += '<!--[if lt IE 9]>\n';
		footerHTML += '	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>\n';
		footerHTML += '<![endif]-->\n';
		footerHTML += '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/' + boostrapVersion + '/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>\n';
		footerHTML += '<script>\n';
		footerHTML += '	(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n';
		footerHTML += '	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n';
		footerHTML += '	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n';
		footerHTML += '	})(window,document,\'script\',\'http://www.google-analytics.com/analytics.js\',\'ga\');\n';
		footerHTML += '	ga(\'create\', \'' + googleAnalyticsIdentifier + '\', \'auto\');\n';
		footerHTML += '	ga(\'send\', \'pageview\');\n';
		footerHTML += '</script>\n';
		return footerHTML;
	}
}
