<?php

interface InventoryInterface {
  public function carsSold($numOfCars);
}

/**
 *
 */
class Inventory implements InventoryInterface {

  public function carTotal ($company, $numOfCars = 1){
    $companies = [
      "BMW" => 240,
      "Honda" => 177
    ];

    $totalAfter = $companies[$company] - $numOfCars;

    return "{$totalAfter} Total cars left after purchase";
  }

  public function carsSold($numOfCars) {
    echo "<h2>Today we sold {$numOfCars}</h2>";
  }
}


?>
