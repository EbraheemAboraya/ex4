<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form_nasa</title>
</head>
<body>
 <h2> Welcome To Nasa </h2>
 <h2> Name :- <?php echo $_GET["fullName"]; ?></h2>
 
  <h3>Email address is :- <?php echo $_GET["mail"]; ?> </h3>
  <h3> Date of birth : -</h3>
  <h4>Year :- <?php echo $_GET["year"]; ?> </h4>
  <h4>Month :- <?php echo $_GET["month"]; ?> </h4>
  <h4>Day :- <?php echo $_GET["day"]; ?> </h4>

  <h3> Your subject :- <?php echo $_GET["subject"]; ?>  </h3>
 

<h3>type of card :- 
<?php
if(isset($_GET['chcked'])){ // assuming the form is submitted via POST method
    if(!empty($_GET['card'])) {
        // Loop through the array of checkbox values
        foreach($_GET['card'] as $value){
            echo $value." ";
        }
    } else {
        echo "No checkbox selected";
    }
}
?>
</h3>



</body>
</html>