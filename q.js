
  $(document).ready(function() {
    // Function to add an item to the bag via AJAX
    function addItemToBag(item) {
      $.ajax({
        url: 'add_to_bag.php', // Replace with the path to your backend file
        method: 'POST',
        data: { item: item },
        success: function(response) {
          alert(response); // Display a success message
          updateBag(); // Update the bag items
        },
        error: function() {
          alert('Error adding item to bag.');
        }
      });
    }

    // Function to update the bag items
    function updateBag() {
      $.ajax({
        url: 'get_bag_items.php', // Replace with the path to your backend file to get bag items
        method: 'GET',
        success: function(response) {
          $('#bagItems').html(response); // Update the bag items in the HTML
        },
        error: function() {
          $('#bagItems').html('Error loading bag items.');
        }
      });
    }

    // Handle click event on product images
    $('img[data-item]').click(function() {
      var item = $(this).data('item');
      addItemToBag(item);
    });

    // Update the bag items when the page loads
    updateBag();
  });

