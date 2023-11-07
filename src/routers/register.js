const express = require('express');
const router = express.Router();
const RegisterController = require('../controllers/RegisterController');
const { check } = require('express-validator');


// Rota para exibir o formulário de registro
router.get('/register', (req, res) => {
  res.render('register'); // Renderiza a página de registro (register.html)
});

// Rota para lidar com a submissão do formulário de registro
router.post('/register', [
    check('name').notEmpty().withMessage('O nome é obrigatório'),
    check('address').notEmpty().withMessage('O endereço é obrigatório'),
    check('phone').isNumeric().withMessage('O número de telefone deve ser um número válido'),
    check('gender').notEmpty().withMessage('O sexo é obrigatório'),
  ], RegisterController.registerUser);

module.exports = router;
