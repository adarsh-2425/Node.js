//create a very simple groupchat using events module and backup chat data into an txt file using fs module
const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

//path
const chatLog = path.join(__dirname, "chatLog.txt");

//chat class
class Chat extends EventEmitter{
  chat(username, message) {
    this.emit('newMessage', username, message);
  };
}

//instance
const messenger = new Chat();

//listening event
messenger.on('newMessage', (username, message) => {
  const chatLogEntry = `${username}: ${message}`;

  //backup chat to log
  fs.appendFile(chatLog, chatLogEntry + '\n', (err) => {
    if (err) throw err;
    console.log('backup successful');
  });

  console.log(chatLogEntry);
});

//start chat
messenger.chat("Alice", "Hey Lol");
messenger.chat("Lol", "Whats up Alice");
