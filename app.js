let messgSend = document.querySelector("#message_send");
let messgRecv = document.querySelector("#message_recev");

const addChar = (char) => {
  messgSend.textContent += char;
};
const removeLastChar = () => {
  messgSend.textContent = messgSend.textContent.slice(0, -1);
};
const send = () => {
  messgRecv.textContent = "";
  messgRecv.textContent = messgSend.textContent;
  messgSend.textContent = "";
};
const reset = () => {
  messgRecv.textContent = "";
  messgSend.textContent = "";
};
