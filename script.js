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

// document.querySelectorAll(".special-title").forEach((specItem) => {
//   specItem.style.fontSize = "2rem";
// });

const specItem = document.querySelectorAll(".special-title"); // use querySelectorAll
for (let i = 0; i < specItem.length; i++) {
  specItem[i].style.fontSize = "2rem";
  break;
}

// * === Part 5
// *  a. Access the Past Races list and remove Chicago.

// document.querySelectorAll("#past-races").forEach((text) => {
//   if (text.textContent === "Chicago") {
//     document.querySelector("#past-races").removeChild(text);
//   }
// });

// const rmvChicago = function () {
//   document.querySelector("#past-races > li").removeChild("Chicago");
// };

// * === Part 6
// *  a. Create a new <li> element, change the new <li> text to the name of a city, and   append it to the Past Races list.

const li = document.createElement("li");
li.textContent = "Santa Monica";
document.querySelector("#past-races").appendChild(li);

// * === Part 7
// *  a. Create a new .blog-post corresponding to the new city added in Part 6.
// *  b. You will have to create a new <div> with class of .blog-post
// *  c. A new <h2> with text
// *  d. A new <p> with some text.
// ! Think about what order you want to create the elements, and what order you want to append them in.
// create new elements the append in order to add to Dom's Adventures -> main, heading, paragraph text

const blogPost = document.createElement("div");
blogPost.classList.add(".blog-post");
const headingTwo = document.createElement("h2");
headingTwo.textContent = "Santa Monica";
const pEl = document.createElement("p");
pEl.textContent =
  "I Beat Johnny Tran in a rematch, he became a good guy so I let him join our family.";

document.querySelector(".main").appendChild(blogPost);
blogPost.appendChild(headingTwo);
blogPost.appendChild(pEl);

// * === Part 8
// *  a. Load a random DOM quote on page refresh.
// *  b. Query select the #quote-title ID element and add a click event handler.
// ! That event handler should use the function randomQuotewhenever #quote-title is clicked.

const randomQuote = function () {
  document.querySelector("#quote-of-the-day").innerText = `"${
    quotes[Math.floor(Math.random() * quotes.length)]
  }"`;
};

document.querySelector("#quote-title").addEventListener("click", (event) => {
  randomQuote();
});

// * === Part 9
// *  a. Select all .blog-post class elements.
// *  b. Iterate through the list of .blog-post class elements
// *  c. Apply two event handlers to each node. The first event handler should be listening for (mouseout) events while the second handler should be listening for (mouseenter) events.
