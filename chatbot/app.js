// Function to toggle the chatbot
function toggleChatbot() {
    var chatBot = document.getElementById("chatBot");
    if (chatBot.style.display === "none" || chatBot.style.display === "") {
        chatBot.style.display = "block";
    } else {
        chatBot.style.display = "none";
    }
}

//initially screen load
document.addEventListener('DOMContentLoaded', async (event) => {
    var chatBot = document.getElementById("chatBot");
    chatBot.style.display = "none"; // Initially hide the chatbot
});

function getBotResponse(userText) {
    return fetch('responses.json') // Fetch responses from responses.json
        .then(response => response.json())
        .then(data => {
            for (let key in data) {
                if (userText.toLowerCase().includes(key.toLowerCase())) {
                    return data[key];
                }
            }
            return "Sorry, I didn't understand.";
        })
        .catch(error => {
            console.error('Error fetching responses:', error);
            return "Sorry, something went wrong.";
        });
}

//its call first
async function talk() {
    var userInput = document.getElementById('userBox').value.trim();
    var chatLog = document.getElementById('chatLog');

    if (userInput === "") {
        return;
    }

    chatLog.innerHTML += `<p class="userText"><span>${userInput}</span></p>`;

    // Get response from the bot
    try {
        const botResponse = await getBotResponse(userInput);
        chatLog.innerHTML += `<p class="botText"><span>${botResponse}</span></p>`;
        document.getElementById('userBox').value = ""; // Clear input after sending message
        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to bottom of chat log
    } catch (error) {
        console.error('Error getting bot response:', error);
    }
}
