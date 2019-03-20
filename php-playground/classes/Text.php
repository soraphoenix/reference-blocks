<?php

  class Text {
    public $text;
    public function __construct($text) {
      $this->text = $text;

      return $this;
    }

    public function uppercase() {
      $this->text = strtoupper($this->text);
      return $this;
    }

    public function reverse() {
      $this->text = strrev($this->text);
      return $this;
    }

    public function print() {
      echo $this->text;
    }
  }

?>
