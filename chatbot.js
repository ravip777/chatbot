let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", " ok we will try to rectify the error ", "Thank You", " our customer executive will soon contacts you "];


let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");

function sendMsgToChatbot() {
    let userMsg = userInputEl.value;

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add("msg-to-charbot");
    msgContainerEl.appendChild(userMsgEl);
    getReplyFromChatbot();
    userInputEl.value = "";

}

function getReplyFromChatbot() {

    let noOfChatbotMsgs = chatbotMsgList.length;
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) - 1];

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatbotMsg;
    chatbotMsgEl.classList.add("msg-from-chatbot");
    msgContainerEl.appendChild(chatbotMsgEl);

}