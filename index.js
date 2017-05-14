#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');

const config = require('./config');

const server = http.createServer();

const pages = require('./pages').get();

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
	response.write(require('./pageHtmlHead').get(page.pageTitle, config.staticFiles, config.boostrapVersion, config.html5shivVersion, config.respondJsVersion));	
	
	// HTML body
	response.write('<body>\n');
	
	response.write('	<div class="row">\n');
	response.write(require('./pageHeader').get(pages, config.staticFiles));
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
		const photos = require('./photos').get();
		response.write('<p>Many of these photographs have been digitally processed/enhanced… just for fun.</p>\n');
		response.write('<div class="row">\n');
		response.write('	<div class="col-md-8 col-md-offset-2">\n');
		for (var i=0; i<photos.length; i++) {
			const photoName = photos[i].substr(11, photos[i].length - 15);
			response.write('		<div class="container-fluid">\n');
			response.write('			<figure class="panel panel-default">\n');
			response.write('				<div class="panel-body text-center">\n');
			response.write('					<img class="img-thumbnail img-responsive" src="http://' + config.staticFiles + '/photos/' + photos[i].replace(/ /g, '%20') + '" alt="' + photoName + '" />\n');
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
	
	response.write(require('./pageFooter').get(hook, filePath, config.googleAnalyticsIdentifier, config.jQueryVersion, config.boostrapVersion));	
	response.write('</body>\n');
	
	response.end();
});



server.listen(config.port, config.hostname, () => {
	console.log(`Server running at http://${config.hostname}:${config.port}/`);
});
