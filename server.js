
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const usersFilePath = 'users.json';
if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, '[]');
}

app.post('/submit-form', (req, res) => {
  console.log(req);
  const data = req.body;
  const userData = {
    firstname: data.firstname,
    phone: data.phone,
    email: data.email,
    dateOfBirth: data.dateOfBirth,
    location: data.location
  };
console.log(userData);
  const usersData = JSON.parse(fs.readFileSync(usersFilePath));
  usersData.push(userData);
  fs.writeFileSync(usersFilePath, JSON.stringify(usersData, null, 2));
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});



