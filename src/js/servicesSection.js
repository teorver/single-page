let modal = document.getElementById("servicesModal");

  let span = document.getElementsByClassName("close")[0];

  let serviceItems = document.querySelectorAll('.services-list-item');

  serviceItems.forEach(function(item) {
    item.addEventListener('click', function() {
      modal.style.display = "flex";
    });
  });

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }