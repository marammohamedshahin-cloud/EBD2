
import { items } from "./items.js";

// Draw the given items into the list.
export function renderItems(list) {
  const listElement = document.querySelector("#list");
  listElement.replaceChildren();

  list.forEach((item) => {
    const li = document.createElement("li");
    li.className = "tile";
    li.textContent = `${item.name} (${item.category})`;
    listElement.append(li);
  });
}

// Return only items in the bags category.
export function matching() {
  return items.filter((item) => item.category === "bags");
}

// Set up the page and its button.
export function start() {
  renderItems(items);

  const button = document.querySelector("#shortlist");
  button.addEventListener("click", () => {
    renderItems(matching());
  });
}


