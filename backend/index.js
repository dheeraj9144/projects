const express = require('express')
require('dotenv').config()
const app = express()
const users = require('./src/users')


app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/api/getuser', users.getdata);

app.listen(process.env.port, () => {
    console.log("Listening...", process.env.port)
})








// const fs = require('fs');
// const path = require('path');
// const bcrypt = require('bcrypt');
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 3003;

// const filePath = path.resolve(__dirname, 'data.json');

// app.use(express.json());
// app.use(cors());

// function fetchUsers() {
//   try {
//     const users = fs.readFileSync(filePath, 'utf-8');
//     return JSON.parse(users).users;
//   } catch (error) {
//     console.error('Error in fetching user data:', error.message);
//     return [];
//   }
// }

// app.post('/api/login', (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ error: 'Username and password are required' });
//   }

//   const users = fetchUsers();
//   const user = users.find((user) => user.username === username);

//   if (user && bcrypt.compareSync(password, user.password)) {
//     return res.status(200).json({ message: 'Login successful' });
//   } else {
//     return res.status(401).json({ error: 'Invalid credentials' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
