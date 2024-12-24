// Import required packages
const express = require('express'); // Express framework to handle server and routes
const cors = require('cors'); // Import cors package to handle Cross-Origin Resource Sharing
const app = express(); // Create an instance of Express app

// Define the port number for the server to listen on
const port = 3000;

// Middleware setup
app.use(cors()); // Enable CORS to allow requests from other domains
app.use(express.json()); // Middleware to parse incoming JSON requests

// Sample data: A list of users with their names, skills, and years of experience
const users = [
    { name: "Anup", skills: ["C++", "C", "MYSQL"], yearOfExperience: 1 },
    { name: "Anisha", skills: ["C++", "Python", "MYSQL"], yearOfExperience: 3 },
    { name: "James", skills: ["Jira", "C", "JS"], yearOfExperience: 5 },
    { name: "Michel", skills: ["AWS", "C", "Python"], yearOfExperience: 15 },
    { name: "Virat", skills: ["C++", "C", "JS"], yearOfExperience: 20 },
    { name: "Dhoni", skills: ["C++", "React", "Tailwind"], yearOfExperience: 10 },
    { name: "Ronaldo", skills: ["C++", "Node.js", "Babble.js"], yearOfExperience: 25 },
    { name: "Haaland", skills: ["C", "Java", "Python"], yearOfExperience: 3 },
    { name: "Mbappe", skills: ["AWS", "React", "Tailwind"], yearOfExperience: 8 },
    { name: "Saka", skills: ["C++", "C", "JS"], yearOfExperience: 3 },
    { name: "Maguire", skills: ["C++", "C", "Python"], yearOfExperience: 9 }
];

// Define a GET route for fetching user data
app.get('/users', (req, res) => {
   res.json(users); // Send the users array as a JSON response
});

// Start the Express server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`); // Log a message when the server starts
});
