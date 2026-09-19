const welcomeButton = document.querySelector("#welcomeButton");
const message = document.querySelector("#message");

welcomeButton.addEventListener("click", () => {
  message.textContent = "Welcome to BNCC! JavaScript is connected successfully.";
});
