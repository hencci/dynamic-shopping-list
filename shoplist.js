const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const myItem = input.value;
    input.value = " ";

    const listItem = document.createElement("li");
    const listContent = document.createElement("span");
    const listButton = document.createElement("button");
});