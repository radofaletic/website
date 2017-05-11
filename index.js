#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const staticFiles = 'files.radofaletic.com.s3-website-ap-southeast-2.amazonaws.com';
const googleAnalyticsIdentifier = 'UA-49242266-7';

const boostrapVersion = '3.3.7';
const html5shivVersion = '3.7.3';
const respondJsVersion = '1.4.2';
const jQueryVersion = '3.2.1';

const server = http.createServer();

const pages = {
		'index': { 'pageTitle': 'Rado’s homepage', 'navTitle': 'Introduction' },
		'papers': { 'pageTitle': 'Rado’s publications', 'navTitle': 'Publications' },
		'photos': { 'pageTitle': 'Rado’s photos', 'navTitle': 'Photos' },
		'resume': { 'pageTitle': 'Rado’s resumé', 'navTitle': 'Resumé' },
		'contact': { 'pageTitle': 'Rado’s contact details', 'navTitle': 'Contact details' },
		'about': { 'pageTitle': 'Rado’s copyright page', 'navTitle': 'About / Copyright' }
	};



server.on('request', (request, response) => {
	var hook = request.url.substr(1);
	if (hook.substr(-4) == '.php' || hook == 'index') {
		response.statusCode = 301;
		hook = (hook == 'index' || hook == 'index.php') ? '' : hook.substr(0, hook.length - 4);
		response.setHeader('Location', 'http://' + request.headers['host'] + '/' + hook);
		response.end();
		return;
	} else if (hook == '') {
		hook = 'index';
	}
	var filePath = '';
	if (hook in pages) {
		response.statusCode = 200;
		page = pages[hook];
		filePath = path.join(__dirname, 'pages/' + hook + '.html');
	} else {
		hook = 'error';
		response.statusCode = 404;
		page = { 'pageTitle': http.STATUS_CODES[response.statusCode], 'navTitle': '' };
	}
	response.setHeader('Content-Type', 'text/html; charset=utf-8');
	
	response.write('<!DOCTYPE html>\n');
	response.write('<html lang="en-AU">\n');
	
	// HTML <head>
	response.write('<head>\n');
	response.write('	<meta charset="utf-8">\n');
	response.write('	<meta http-equiv="X-UA-Compatible" content="IE=edge">\n');
	response.write('	<meta name="viewport" content="width=device-width, initial-scale=1">\n');
	response.write('	<title>' + page.pageTitle + ' | Rado Faletič</title>\n');
	response.write('	<link rel="license" href="/about" />\n');
	response.write('	<meta name="author" content="Rado Faletič" />\n');
	response.write('	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/' + boostrapVersion + '/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />\n');
	response.write('	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/' + boostrapVersion + '/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous" />\n');
	response.write('	<link rel="stylesheet" href="http://' + staticFiles + '/css/style.css" type="text/css" />\n');
	response.write('	<!--[if lt IE 9]>\n');
	response.write('		<script src="https://oss.maxcdn.com/html5shiv/' + html5shivVersion + '/html5shiv.min.js" />\n');
	response.write('		<script src="https://oss.maxcdn.com/respond/' + respondJsVersion + '/respond.min.js" />\n');
	response.write('	<![endif]-->\n');
	response.write('</head>\n');
	
	
	// HTML body
	response.write('<body>\n');
	
	response.write('	<div class="row">\n');
	response.write('		<header class="col-md-2" id="header">\n');
	response.write('			<nav class="navbar navbar-default navbar-fixed-left" role="navigation">\n');
	response.write('				<div class="container-fluid">\n');
	response.write('					<div class="navbar-header">\n');
	response.write('						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#rado-navbar-collapse">\n');
	response.write('							<span class="sr-only">Toggle navigation</span>\n');
	response.write('							<span class="icon-bar"></span>\n');
	response.write('							<span class="icon-bar"></span>\n');
	response.write('							<span class="icon-bar"></span>\n');
	response.write('						</button>\n');
	response.write('					</div>\n');
	
	response.write('					<div class="collapse navbar-collapse" id="rado-navbar-collapse">\n');
	response.write('						<div class="navbar-nav">\n');
	response.write('							<ul class="nav nav-pills nav-stacked">\n');
	response.write('								<li class="navbar-text"><img class="img-rounded img-responsive" src="http://' + staticFiles + '/photos/Rado/Rado' + (Math.floor(Math.random() * 11) + 6) + '.png" alt="Rado Faletič" /></li>\n');
	for (var iHook in pages) {
		response.write('								<li><a href="/' + ((iHook == 'index') ? '' : iHook) + '" title="' + pages[iHook].navTitle + '">' + pages[iHook].navTitle + '</a></li>\n');
	}								
	response.write('							</ul>\n');
	response.write('						</div>\n');
	response.write('					</div>\n');
	response.write('				</div>\n');
	response.write('			</nav>\n');
	response.write('		</header>\n');
	response.write('		<section id="content" class="col-md-8">\n');
	response.write('			<div class="container-fluid">\n');
	response.write('				<div class="page-header">\n');
	response.write('					<h1 class="text-center">' + page.pageTitle + '</h1>\n');
	response.write('				</div>\n');
  
	if (hook == 'error') {
		response.write('<p>Congratulations. You have cleverly found a webpage that does not exist.</p>\n');
		if (request.headers.referer) {
			response.write('<p>Whilst trying to gain access to “<strong>' + request.headers.host + request.url + '</strong>” from “<a href="' + request.headers.referer + '">' + request.headers.referer + '</a>” you have inadvertently woken the internet gremlin who promptly stole the page and cast an evil spell upon it.</p>\n');
			response.write('<p>Please contact the magical transportificationologist at <a class="url" href="mailto:rado.faletic@montroix.com">rado.faletic@montroix.com</a> to inform them of this dastardly incident.</p>\n');
		} else {
			response.write('<p>The page that you have tried to access has probably been stolen by internet gremlins. I recommended that you consider contemplating a warm cup of chai tea then stand up and do a crazy dance for three minutes whilst singing in a deep gruff tone. I cannot guarantee that the gremlins will return the page that you are looking for, but I do hope that you feel better about this incident.</p>\n');
		}
	} else if (hook == 'photos') {
		const photos = [
				'1994-00-00 Magra sunset.jpg',
				'1999-12-21 Narooma.jpg',
				'1999-12-31 Iron Bridge on the King River.jpg',
				'1999-12-31 waterfall on King River.jpg',
				'2000-00-00 Lake Ginnindera.jpg',
				'2000-00-00 flowers in Emu Ridge.jpg',
				'2000-00-00 sunset from Monaro Highway.jpg',
				'2000-04-00 poplars by Lake Ginninderra.jpg',
				'2000-06-19 Gold Coast morning fire.jpg',
				'2000-06-19 Surfers Paradise.jpg',
				'2000-06-20 Gold Coast sunrise.jpg',
				'2000-09-10 Jervis Bay sunrise.jpg',
				'2000-12-08 Crookwell Wind Farm.jpg',
				'2000-12-09 along Grove Creek.jpg',
				'2001-01-01 New Millenium sunrise from Mt. Wellington.jpg',
				'2001-03-00 birds in Merrimbula.jpg',
				'2001-05-06 the pool playoffs in Vincentia.jpg',
				'2001-06-02 Captain Cook Fountain and National Library.jpg',
				'2001-07-00 winter by Lake Burley Griffin.jpg',
				'2001-08-00 Captain Cook fountain.jpg',
				'2002-02-00 lavendar by Nerang Pool.jpg',
				'2002-03-00 by Nerang Pool.jpg',
				'2002-03-00 sunflower at Magra.jpg',
				'2002-04-00 the National Carillion.jpg',
				'2003-11-00 blossom by Lake Ginninderra.jpg'
			];
		response.write('<p>Many of these photographs have been digitally processed/enhanced… just for fun.</p>\n');
		response.write('<div class="row">\n');
		response.write('	<div class="col-md-8 col-md-offset-2">\n');
		for (var i=0; i<photos.length; i++) {
			const photoName = photos[i].substr(11, photos[i].length - 15);
			response.write('		<div class="container-fluid">\n');
			response.write('			<figure class="panel panel-default">\n');
			response.write('				<div class="panel-body text-center">\n');
			response.write('					<img class="img-thumbnail img-responsive" src="http://' + staticFiles + '/photos/' + photos[i].replace(/ /g, '%20') + '" alt="' + photoName + '" />\n');
			response.write('				</div>\n');
			response.write('				<figcaption class="panel-footer text-center">' + photoName + ', © ' + photos[i].substr(0, 4) + ' Rado Faletič</figcaption>\n');
			response.write('			</figure>\n');
			response.write('		</div>\n');
		}
		response.write('	</div>\n');
		response.write('</div>\n');
		response.write('<p>All images are © copyright Rado Faletič.</p>\n');
	} else {
		var data = fs.readFileSync(filePath, 'utf8');
		response.write(data);
	}
	
	response.write('			</div>\n');
	response.write('		</section>\n');
	response.write('		<div class="col-md-2">\n');
	response.write('			<div class="container-fluid">\n');
	response.write('				<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>\n');
	response.write('				<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5118549527798506" data-ad-slot="4211089992" data-ad-format="auto"></ins>\n');
	response.write('				<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>\n');
	response.write('			</div>\n');
	response.write('		</div>\n');
	response.write('	</div>\n');
	
	response.write('	<footer id="footer" class="text-center container">\n');
	response.write('		<div class="col-md-8 col-md-offset-2">\n');
	response.write('			<p>\n');
	if (hook != 'error' && hook != 'photos') {
		var fileStats = fs.lstatSync(filePath);
		var mTime = fileStats.mtime;
		response.write('				Last modified: ' + mTime.toLocaleString('en-AU', { 'timeZone': 'Australia/Sydney', 'hour12': true, 'weekday': 'long', 'year': 'numeric', 'month': 'long', 'day': 'numeric', 'hour': 'numeric', 'minute': '2-digit', 'second': '2-digit', 'timeZoneName': 'short' }) + ' by Rado Faletič.<br />\n');
	}
	response.write('				<a class="img" href="http://validator.w3.org/check/referer"><img style="border:0;width:80px;height:31px;" src="http://www.w3.org/html/logo/badge/html5-badge-h-css3-semantics.png" width="80" height="31" alt="HTML5 Powered with CSS3 / Styling, and Semantics" title="HTML5 Powered with CSS3 / Styling, and Semantics"></a>\n');
	response.write('				<a class="img" href="http://jigsaw.w3.org/css-validator/check/referer"><img style="border:0;width:88px;height:31px;" width="88" height="31" src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" /></a>\n');
	response.write('			</p>\n');
	response.write('		</div>\n');
	response.write('	</footer>\n');
	
	response.write('	<script src="https://ajax.googleapis.com/ajax/libs/jquery/' + jQueryVersion + '/jquery.min.js"></script>\n');
	response.write('	<!--[if lt IE 9]>\n');
	response.write('		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>\n');
	response.write('	<![endif]-->\n');
	response.write('	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/' + boostrapVersion + '/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>\n');
	response.write('	<script>\n');
	response.write('		(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n');
	response.write('		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n');
	response.write('		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n');
	response.write('		})(window,document,\'script\',\'http://www.google-analytics.com/analytics.js\',\'ga\');\n');
	response.write('		ga(\'create\', \'' + googleAnalyticsIdentifier + '\', \'auto\');\n');
	response.write('		ga(\'send\', \'pageview\');\n');
	response.write('	</script>\n');
	response.write('</body>\n');
	
	response.end();
});



server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
