<!DOCTYPE html>
<html>
<head>
  <!-- Standard Meta -->
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

<title>MQL Test</title>
</head>
<body>


<?php

require_once('freebase.php');
require_once('questionQuery.php');
require_once('question.php');
require_once('queries.php');

$APIKey = 'AIzaSyDe0u6czZM9vCgiYDtqnMjmZ4lcGR4tt68';

$freeBase = new freeBase($APIKey);

// Get corresponding queries for selected topics: books, music, etc.
// ToDo: replace with real DB query
$topic = 'music';
$countries = array(
    'Russia'
);

$queryData = $mqlList[$topic][0];

$queryObj = new questionQuery($freeBase, $queryData);
$question = $queryObj->generateQuestion($countries);

?>

<h1><?php echo $question->getQuestion(); ?></h1>

<?php foreach ($question->getOptions() as $option) : ?>
    <p><label><input type="radio" name="option" value="<?php echo $option['text'] ?>" /> <?php echo $option['text']; ?> <?php if ($option['is_correct']) echo '[Correct one]' ?></label></p>
<?php endforeach; ?>

</body>
</html>