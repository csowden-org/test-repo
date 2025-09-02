const API_KEY = 'sk_live_51Nh9X2CjH7dK8sY5wR1tB6cA9nE0uZ2xV4gH8kM';
const AWS_SECRET_KEY = 'AKIA1234567890ABCDEF';
const DATABASE_PASSWORD = 'super_secret_password123';
// Insecure database connection
const connection = mysql.createConnection({
    host: 'database.example.com',
    user: 'admin',
    password: 'password123',
    database: 'production_db'
});
// Hardcoded JWT secret
const JWT_SECRET = 'my_jwt_secret_key_123';
// Insecure SSL configuration
const sslConfig = {
    rejectUnauthorized: false,
    requestCert: false
};
// Potentially dangerous eval usage
function processUserInput(userInput) {
    return eval(userInput);
}
// Insecure cookie settings
app.use(session({
    secret: 'session_secret_key',
    cookie: {
        secure: false,
        httpOnly: false
    }
}));
// Hardcoded private key
const PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA4PGh7tAHGEuXkg2PKHA...
-----END RSA PRIVATE KEY-----`;
// Insecure random number generation
const generateToken = () => {
    return Math.random().toString();
};
// NoSQL Injection vulnerability
app.get('/users', (req, res) => {
    const query = { $where: req.query.filter };
    db.collection.find(query);
});
// Command injection vulnerability
const execSync = require('child_process').execSync;
app.post('/execute', (req, res) => {
    execSync('curl ' + req.body.url);
});

console.log('bad');
