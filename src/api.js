const express = require('express');
const userController = require('./controllers/userController');

// ...

const app = express();

app.use(express.json());

// ...
app.post('/login', userController.login);

app.use((error, req, res, _next) => {
    const { name, message } = error;
    switch (name) {
        case 'InvalidData':
            res.status(400).json({ message });
            break;
        default: 
        res.status(500).json({ message });
    }
});
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
