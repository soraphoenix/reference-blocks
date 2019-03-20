<?php
  require "vendor/autoload.php";

  $car1 = new Honda("Civic", 2, "green", "25,000", new Inventory);
  // $car1->statement();
  $car1->price();
  // $car1->store();
  $car1->states();
  $car1->storyTime();

  echo "<hr>";
  $car2 = new BMW("M3", 4, "Midnight Blue", "80,000", new Inventory);
  //
  // $car2->statement();
  $car2->price();
  $car2->storyTime();

  $myName = new Text("Tracy Marshall");
  $myName->reverse()->uppercase()->print();




?>

<!DOCTYPE html>
<html>
<body>



</body>
</html>
