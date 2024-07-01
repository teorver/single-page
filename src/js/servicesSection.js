let modal = document.getElementById("servicesModal");

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // Get all service items
  let serviceItems = document.querySelectorAll('.services-list-item');

  // When the user clicks on a service item, open the modal 
  serviceItems.forEach(function(item) {
    item.addEventListener('click', function() {
      modal.style.display = "flex";
    });
  });

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }