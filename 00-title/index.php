<!DOCTYPE html>
<html lang="en">
<head> 
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<link rel='stylesheet' href='style.css' type='text/css' media='all' />
	<link rel="stylesheet" type="text/css" href="../style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script type="text/javascript">

		$( document ).ready(function() { // when thr document is ready, starts the function

			$('#number').text('0'); // the id (number=100) is changed to 0

			function doSetTimeout(i) { // the text of the number changes with a timeout: a delay of 20ms
				setTimeout(function() { 
					$('#number').text(i);
				}, 20 * i);
			}

			for (i = 0; i < 101; i++) {  // the for loop does 100 times the function doSetTimeout
				doSetTimeout(i);	
			}
		});
	</script>
</head>
<body>
<?php include '../header.php';?>

<h1>Fashion Instagrammers in <span id="number">100</span> Pics </h1>
<a href="../01-intro/index.php" class="full"></a>


<?php include '../footer.php';?>	
</body>
</html>