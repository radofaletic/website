<!DOCTYPE html>
<html lang="en-AU">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?= $title ?></title>
	<link rel="license" href="/about.php" />
	<meta name="author" content="Rado Faletič" />
<?= ((isset($head) && $head) ? $head . "\n" : '') ?>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	<link rel="stylesheet" href="/css/style.css" type="text/css" />
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>

<body>
	<div class="row">
		<header class="col-md-2" id="header">
			<nav class="navbar navbar-default navbar-fixed-left" role="navigation">
				<div class="container-fluid">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#rado-navbar-collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					</div>
					<div class="collapse navbar-collapse" id="rado-navbar-collapse">
						<div class="navbar-nav">
						
							<ul class="nav nav-pills nav-stacked">
								<li class="navbar-text"><img class="img-rounded img-responsive" src="/images/Rado/Rado<?= mt_rand(6,16) ?>.png" alt="Rado Faletič" /></li>
								<li><a href="/" title="Introduction">Introduction</a></li>
								<li><a href="/papers.php" title="Publications">Publications</a></li>
								<li><a href="/photos.php" title="Photos">Photos</a></li>
								<li><a href="/resume.php" title="Resumé">Resumé</a></li>
								<li><a href="/contact.php" title="Contact details">Contact details</a></li>
								<li><a href="/about.php" title="About / Copyright">About / Copyright</a></li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
		<section id="content" class="col-md-8">
			<div class="container-fluid">
				<div class="page-header">
					<h1 class="text-center"><?= $title ?></h1>
				</div>
