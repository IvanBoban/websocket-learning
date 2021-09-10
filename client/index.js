const socket = new WebSocket("ws://localhost:8080");

socket.onmessage = (event) => {
  console.log(event.data);
  appendMessage(event.data);
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!getMessageContent()) {
    alert("Message can't be empty");
    return;
  }
  sendMessage();
  document.getElementById("message-content").value = "";
});

function appendMessage(message) {
  if (!message) {
    return;
  }
  document.querySelector("ul").append(generateNewListItem(message));
}

function generateNewListItem(message) {
  let element = document.createElement("li");
  element.innerText = message;
  return element;
}

function sendMessage() {
  socket.send(getMessageContent());
}

function getMessageContent() {
  return document.getElementById("message-content").value;
}
