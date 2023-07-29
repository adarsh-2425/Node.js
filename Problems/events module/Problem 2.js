/*How can you use the EventEmitter class in Node.js to create a custom 'Chat' class 
that emits and listens for different events, such as the 'login', 'logout', and 'chat' events?*/

//importing events module
const EventEmitter = require("events");

//creating class Chat
class Chat extends EventEmitter{
  
  //emits login event
  login(username) {
    this.emit('login', username);
  }

  //emits logout event
  logout(username) {
    this.emit('logout', username)
  }

  //emits chat event
  chat(username, message) {
    this.emit('chat', username, message)
  }
}

//new instance of chat
const messenger = new Chat();

//listening login event
messenger.on('login', username => {
  console.log(`${username} is now online`)
});

//listening logout event
messenger.on('logout', username => {
  console.log(`${username} left the chat.`)
});

//listening chat event
messenger.on('chat', (username, message) => {
  console.log(`${username}: ${message}`)
});

//start chatting
messenger.login("Sarah Connor");
messenger.chat("Sarah Connor", "Hello, Im Sarah Connor!");
messenger.login("T-800");
messenger.chat("T-800", "Come with me if you want to live.");
messenger.logout("Sarah Connor");
