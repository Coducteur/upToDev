const message = "thx for your message, we will contact you ASAP !";

document
  .getElementById("formContact")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
