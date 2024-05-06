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
    }, 1000); /* delay */
  }
}
function appendMessage(sender, message, isAdmin = false) {
  const messageElement = document.createElement('div'); 
  messageElement.classList.add('message');  
  if (isAdmin) { 
    messageElement.classList.add('admin-message');} 
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  
  chatBox.appendChild(messageElement); 

  chatBox.scrollTop = chatBox.scrollHeight; 
}

