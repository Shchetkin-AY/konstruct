(function() {

  const menuSelectors = document.querySelectorAll(".navigation__item");
  const activeTab = 'navigation__item--active'; 

  menuSelectors.forEach(function(item) {
    item.addEventListener("click", function(e) {
      e.preventDefault();

      menuSelectors.forEach(function(controller) {
        controller.classList.remove(activeTab);
      })

      item.classList.add(activeTab)
    })

  })



}())