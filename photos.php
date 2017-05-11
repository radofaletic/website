<?php
$title = 'Rado’s photos';
require_once('includes/config.inc.php');
include_once('includes/header.inc.php');
?>

<p>Many of these photographs have been digitally processed/enhanced… just for fun.</p>

<div class="row">
	<div class="col-md-8 col-md-offset-2">
<?php
$photodir = opendir('photos');
while (false !== ($photo = readdir($photodir))) {
    if ($photo != '.' && $photo != '..' && substr($photo, -5) == '.jpeg') {
        $photolist[] = $photo;
    }
}
closedir($photodir);
rsort($photolist);
foreach ($photolist as $key => $photo) {
    $size=strlen($photo);
    $day = substr($photo, 6, 2);
    $day = ($day == '00') ? '' : $day . '/';
    $month = substr($photo, 4, 2);
    $month = ($day == '' && $month == '00') ? '' : $month . '/';
    $year = substr($photo, 0, 4);
    $year = ($day == '' && $month == '' && $year == '0000') ? '' : $year;
    $photoname = str_replace('_', ' ', substr($photo, 8, $size - 13));
?>
		<figure class="container-fluid">
			<div class="panel panel-default">
				<div class="panel-body text-center">
					<img class="img-thumbnail img-responsive" src="photos/<?= $photo ?>" alt="<?php echo $photoname; ?>" />
				</div>
				<div class="panel-footer text-center">
					<figcaption><?= $photoname ?>, © <?php echo $year; ?> Rado Faletič</figcaption>
				</div>
			</div>
		</figure>
<?php
}
?>
	</div>
</div>

<p>All images are © copyright Rado Faletič.</p>

<?php
include_once('includes/footer.inc.php');
?>
