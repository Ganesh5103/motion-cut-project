function search() {
            var searchInput = document.getElementById('searchInput').value;
            if (searchInput === '') {
                alert('Please enter a search term');
            } else {
                var filename = searchInput.toLowerCase() + '.xhtml';
                window.open(filename, '_self');
            }
}
function myfunction() {
    var username = parseInt(jQuery('#username').val());
    var password = parseInt(jQuery('#password').val());

    jQuery('#uname').html(username);
    window.open('shop.xhtml','_self')
}
// document.getElementById("login-form").addEventListener("submit", function(event) {
//       event.preventDefault();
//       var username = document.getElementById("username").value;
//       var password = document.getElementById("password").value;
      
//       // Perform login validation or authentication here
//       // For demonstration purposes, we'll just display the entered username and password
//       alert("Username: " + username + "\nPassword: " + password);
// });
