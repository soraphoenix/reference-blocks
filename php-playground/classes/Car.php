<?php

  /**
   * cah
   */
  class Car extends Story {

    public $doors = 4;
    public $color = "black";
    private $location = "Northern Blvd";
    public static $states = [
      "NY",
      "CA",
      "TX",
      "GA",
      "FL"
    ];


    public function statement() {
      echo "<h1>{$this->company} {$this->name} has {$this->doors} doors and the color is {$this->color}.</h1>";
      $this->store();
    }

    private function store() {
      echo "Sold at {$this->location} Dealership";
    }

    public static function city() {
      return "Oakland, CA";
    }

    public static function states() {
      foreach(self::$states as $state) {
        echo "<h1>$state</h1>";
      }
    }

    public function printCompanyYears() {
      return $this->companyYears;
    }

  }

?>
