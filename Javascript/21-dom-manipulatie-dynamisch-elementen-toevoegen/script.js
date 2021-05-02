const spottedAnimalsList = document.getElementById("spotted-animals-list");

const animalSpotted = (event) => {
  const spottedAnimal = event.target.textContent;
  const listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(spottedAnimal));
  spottedAnimalsList.appendChild(listItem);
  console.log("spotted:", event.target.textContent);
};

const removeFirstItem = (e) => {
  // Using children instead of child nodes. To prevent empty nodes to be removed instead of "real" elements
  spottedAnimalsList.removeChild(spottedAnimalsList.children[0]);
};

const removeAll = () => {
  Array.from(spottedAnimalsList.children).forEach((e) => e.remove());
};

document.addEventListener("DOMContentLoaded", function () {
  const animalButtons = document.querySelectorAll(".big-five-button");
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
