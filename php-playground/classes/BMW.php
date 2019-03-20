<?php

// require "Car.php";

/**
 * specific cah
 */
class BMW extends Car {

  public $company = "BMW";
  public $companyYears = 87;

  function __construct($name, $doors, $color, $price, Inventory $inventory)
  {
    $this->name = $name;
    $this->doors = $doors;
    $this->color = $color;
    $this->price = $price;
    $this->inventory = $inventory;
  }

  public function price() {
    echo "<h1>The price of this {$this->company} {$this->name} is {$this->price} Euro.</h1>";

    echo $this->inventory->carTotal($this->company);
  }

  public function sportsPackage() {
    echo "<h1>This car is fully equipped</h1>";
  }

}

?>
