const chatBox = document.getElementById('chatBox');

const responses = {
    "what is your name": "I’m QuickChat, your virtual assistant!",
    "what services do you offer": "We offer web development, app development, and AI solutions.",
    "how can i contact you": "You can contact us at support@example.com.",
    "hello": "Hello! How can I assist you today?",
    "hi": "Hi there! Ask me anything!",
    "thank you": "You're welcome!",
    "what day is today": "new Date().toLocaleString('en-US', { weekday: 'long' })"
};

function sendMessage() {
    const userInput = document.getElementById('userInput').value.trim();
    if (!userInput) return;

    appendMessage('user', userInput);

    const response = getBotResponse(userInput.toLowerCase());
    setTimeout(() => {
        appendMessage('bot', response);
    }, 500);

    document.getElementById('userInput').value = '';
}

function getBotResponse(input) {
    for (let key in responses) {
        if (input.includes(key)) {
            return responses[key];
        }
    }
    return "I'm sorry, I don't have an answer for that yet.";
}

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = `${sender === 'user' ? 'You' : 'QuickChat'}: ${message}`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
function getBotResponse(input) {
    if (input.includes("what is the time")) {
        return `Current Time: ${new Date().toLocaleTimeString()}`;
    } else if (input.includes("what is the date")) {
        return `Today's Date: ${new Date().toDateString()}`;
    }

    for (let key in responses) {
        if (input.includes(key)) {
            return responses[key];
        }
    }
    return "I'm sorry, I don't have an answer for that yet.";
}
