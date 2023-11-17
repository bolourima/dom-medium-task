const title = document.createElement("h1");
const paragraph = document.createElement("p");
const button = document.createElement("button");

document.body.append(title, paragraph, button);

title.innerText = "Welcome to Pinecone";
paragraph.innerText = "Pinecone";
button.innerText = "Change message";

function changeText() {
  title.innerText = "Hi Students";
  paragraph.innerText = "Pinecone Became Unicorn";

  paragraph.style.backgroundColor = "yellow";
}

button.addEventListener("click", changeText);
