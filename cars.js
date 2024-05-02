document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login_form");
    const signupForm = document.querySelector(".signup_form");
    const loginButton = document.querySelector(".Login");
    const signupButton = document.querySelector(".Signup");
    signupForm.style.display = "none";
    loginButton.addEventListener("click", function() {
        
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    });
    signupButton.addEventListener("click", function() {
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    });
});




const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
sendBtn.addEventListener('click', sendMessage);
function sendMessage() {
  const userMessage = messageInput.value.trim();
  if (userMessage !== '') {
    appendMessage('User', userMessage);
    messageInput.value = ''; 
    setTimeout(() => {
      const adminResponse = prompt("Admin: Please type your response:");
      if (adminResponse !== null && adminResponse.trim() !== '') {
        appendMessage('Admin', adminResponse, true);
      }
    }, 1000); 
  }
}

function appendMessage(sender, message, isAdmin = false) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  if (isAdmin) {
    messageElement.classList.add('admin-message');
  }
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}










