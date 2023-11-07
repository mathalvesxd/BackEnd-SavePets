const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const { MulterError } = require("multer");
const cors = require("cors");
const routerauth = require("./routers/auth");
const multer = require('multer');
const upload = multer({ dest: ".uploads/" }); // Verifique se o caminho está correto
dotenv.config();
const server = express();
const sequelize = require('./database/mysql');
const RegisterController = require('./controllers/RegisterController');
const User = require('./models/User'); // Adicione esta linha

server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../public')));
server.use(routerauth);

// Roteie a solicitação GET para "/register" para o arquivo HTML diretamente
server.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html')); // Envia o arquivo HTML
});

server.post('/register', upload.single('profilePicture'), RegisterController.registerUser);

server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.use((req, res) => {
    res.json({ error: 'endpoint não encontrado' }).status(404);
});

server.use((err, req, res, next) => {
    if (err instanceof MulterError) {
        // Trate erros do Multer aqui
        res.status(400).json({ error: 'Erro no upload de arquivo' });
    } else {
        console.error(err);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

server.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});

sequelize.sync().then(() => {
    console.log('Tabela de usuários criada.');
});


