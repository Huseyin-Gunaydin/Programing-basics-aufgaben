// Snippet 1
// ----------------------------
const user1 = {
  username: "admin",
  welcome: function () {
    console.log(`Welcome, ${this.username}!`);
  },
};

user1.welcome();

// Snippet 2
// ----------------------------
const user2 = {
  username: "manager",
  welcome() {
    console.log(`Welcome, ${this.username}!`);
  },
};

user2.welcome();

// Snippet 3
// ----------------------------
const user3 = {
  username: "author",
  welcome: function () {
    console.log(`Welcome, ${this.username}!`);
  },
};

let welcome = user3.welcome;

welcome.bind(user3)();

// Snippet 4
// ----------------------------
function unreadMessages() {
  console.log(`${this.username}, you have unread messages!`);
}

const user4 = {
  username: "reader",
  unreadMessages,
  welcome: function () {
    console.log(`Welcome, ${this.username}!`);
  },
};

let myUnreadMessages = user4.unreadMessages;

unreadMessages.bind(user4)();
// alternativ:
user4.unreadMessages();
