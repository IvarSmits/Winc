const animalSpotted = (event) => {
  const list = document.getElementById("spotted-animals-list");
  const listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(spottedAnimal));
  const spottedAnimal = event.target.innerHTML;
  list.appendChild(listItem);
};

const removeFirstItem = () => {
  const firstItem = document.getElementById("spotted-animals-list").firstChild;
  firstItem.remove();
};

const removeAll = () => {
  const spottedAnimalsList = document.getElementById("spotted-animals-list");
  Array.from(spottedAnimalsList.children).forEach((e) => e.remove());
};

document.addEventListener("DOMContentLoaded", function () {
  // store all buttons
  const animalButtons = document.querySelectorAll(".big-five-button");

  // Add event listeners to all buttons
  animalButtons.forEach(function (animalButton) {
    animalButton.addEventListener("click", animalSpotted);
  });

  const removeFirstItemButton = document.getElementById(
    "remove-first-item-button"
  );
  removeFirstItemButton.addEventListener("click", removeFirstItem);

  const removeAllButton = document.getElementById("remove-all-button");
  removeAllButton.addEventListener("click", removeAll);
});
