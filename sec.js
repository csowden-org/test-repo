const express = require('express');
const app = express();
const crypto = require('crypto');
const fs = require('fs');
const child_process = require('child_process');
// XSS Vulnerability
app.get('/xss', (req, res) => {
    const userInput = req.query.userInput;
    res.send(`<div>${userInput}</div>`); // Direct DOM XSS
});
// SQL Injection
app.get('/users', (req, res) => {
    const userId = req.query.id;
    const query = `SELECT * FROM users WHERE id = ${userId}`; // SQL Injection
    connection.query(query);
});
// Path Traversal
app.get('/file', (req, res) => {
    const fileName = req.query.name;
    const content = fs.readFileSync(fileName); // Path Traversal
    res.send(content);
});
// Command Injection
app.get('/exec', (req, res) => {
    const cmd = req.query.cmd;
    child_process.exec(cmd); // Command Injection
});
// Weak Cryptography
function encryptPassword(password) {
    const hash = crypto.createHash('md5'); // Weak hashing algorithm
    return hash.update(password).digest('hex');
}
// Regular Expression DoS (ReDoS)
function validateInput(input) {
    const regex = /^(a+)+$/; // Catastrophic backtracking
    return regex.test(input);
}
// Prototype Pollution
function merge(target, source) {
    for (let key in source) {
        if (key in source) {
            target[key] = source[key];
        }
    }
}
// Insecure Random
function generateToken() {
    return Math.random().toString(); // Cryptographically insecure random
}
// Hard-coded Credentials
const DB_PASSWORD = "super_secret_password123";
const API_KEY = "sk_live_51Nh9X2CjH7dK8sY5wR1tB6cA9nE0uZ2xV4gH8kM";
// Unvalidated Redirect
app.get('/redirect', (req, res) => {
    const url = req.query.url;
    res.redirect(url); // Unvalidated redirect
});
app.listen(3000);

console.log('bad');
