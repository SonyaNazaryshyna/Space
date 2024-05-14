
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Перевірка наявності файлу users.json та створення його, якщо він не існує
const usersFilePath = 'users.json';
if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, '[]');
}

// Використання express.urlencoded() для розкодування даних форми
//app.use(express.urlencoded({ extended: true }));


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
  // Зчитування даних з JSON файлу
  const usersData = JSON.parse(fs.readFileSync(usersFilePath));
  
  // Додавання нового користувача та збереження даних у файлі
  usersData.push(userData);
  fs.writeFileSync(usersFilePath, JSON.stringify(usersData, null, 2));

  // Відправлення відповіді на Ajax запит
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});



