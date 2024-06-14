const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

const existingUserIds = ['user1', 'user2', 'user3']; // 예시로 존재하는 아이디 목록

app.post('/check-id', (req, res) => {
    const { userId } = req.body;
    const exists = existingUserIds.includes(userId);
    res.send({ exists });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});