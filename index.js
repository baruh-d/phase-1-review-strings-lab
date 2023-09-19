// Write your code in this file!

const currentUser = 'Grace Hopper';

const truncatedCurrentUser = currentUser.substr(0, 1)

// console.log(truncatedCurrentUser);


// const welcomeMessage = "Welcome to Flatbook, " + currentUser; // concatenate with + operator

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

console.log(welcomeMessage);

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

console.log(excitedWelcomeMessage);

const shortGreeting = `Welcome, ${truncatedCurrentUser}!`;

console.log(shortGreeting);





