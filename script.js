const socket = io('http://localhost:3000')
const messageForm = document.getElementById('send-container')

const name = prompt('What is your name?')
appendMessage('You joined')
socket.emit('new-user', name)


socket.on('chat-message', data => {
    appendMessage('${date.name}: ${data.message}')
})

socket.on('user-connected', name => {
    appendMessage('${name} connected')
})

socket.on('user-disconeected', name => {
    appendMessage('${name} disconnected')
})


messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    appendMessage('$You: ${message}')
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}