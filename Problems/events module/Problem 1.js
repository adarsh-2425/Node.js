/*Let's say you have a web application that needs to track user logins. Every time a user logs in, you want to log a message to the console and emit a
custom 'login' event that other parts of the application can listen for.*/

const EventEmitter = require('events');

//LoginTracker class
class LoginTracker extends EventEmitter {
  trackLogin(username) {
    this.emit('login', username)
  }
}

const tracker = new LoginTracker();

tracker.on('login', username => {
  console.log(`User ${username} has logged in`)
});

tracker.trackLogin("Alice")
