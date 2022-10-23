let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

// * === Part 1
// *  a. Write a JavaScript statement that selects the (#main-title ID element).
// !  Remember there are a couple of ways to query id.
// *  b. Change the text of the title to something shorter.

document.querySelector("#main-title").textContent =
  "I'm DOM Toretto, family comes first.";

// * === Part 2
// *  a. Select the body and change the background-color to a new color of your choice.

document.body.style.backgroundColor = "#808080";

// * === Part 3
// *  a. Select DOM's Favorite Things list and remove the last list item.

const lastItem = document.querySelector("#favorite-things > li:last-child");
lastItem.parentElement.removeChild(lastItem);

// * === Part 4
// *  a. Select all (.special-title) class elements and change their font-size to 2rem
// ! Remember you might have to iterate through the list of elements

document.querySelector(".special-title").forEach((specItem) => {
  specItem.style.fontSize = "2rem";
});

// const specItem = document.querySelector(".special-title");
// for (let i = 0; i < specItem.length; i++) {
//   specItem[i].style.fontSize = "2rem";
//   break;
// }
