const express = require('express');
const fs = require('fs');
const app = express();
const port = 4001;
const cors = require('cors');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


const messagesFilePath = 'messages.json';

if (!fs.existsSync(messagesFilePath)) {
  fs.writeFileSync(messagesFilePath, '[]');
}

app.post('/submit-form', (req, res) => {
  const { fullName, email, message } = req.body;


  const newMessage = {
    fullName,
    email,
    message,
    timestamp: new Date().toISOString()
  };


  const messages = JSON.parse(fs.readFileSync(messagesFilePath));

  messages.push(newMessage);
  fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2));

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
