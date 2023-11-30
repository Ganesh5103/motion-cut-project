<?php
session_start();

// Function to get the bag items
function getBagItems() {
  if (isset($_SESSION['bag'])) {
    $bagItems = $_SESSION['bag'];
    $html = '';

    foreach ($bagItems as $item) {
      $html .= '<li>' . $item . '</li>';
    }

    return $html;
  }

  return 'No items in the bag.';
}

echo getBagItems();
?>
