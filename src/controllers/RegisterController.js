const  User  = require('../models/User'); // Certifique-se de importar o modelo de usuário adequado
console.log('User model imported'); // Adicione este log após a importação do modelo User
const generateRandomNumber = require('../helpers/randomNumber')

const { validationResult } = require('express-validator');

const registerUser = async (req, res) => {
  // Validação dos dados
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, password, address, phone, gender} = req.body;

    // Processar o upload da foto de perfil
    const profilePicture = req.file; // O campo de upload de arquivo deve ser chamado 'profilePicture' no formulário

    console.log('Dados do usuário a serem registrados:', {
      name,
      email,
      password,
      address,
      phone,
      gender,
      profilePicture: profilePicture ? profilePicture.filename : null,
    });

    let hasUser = await User.findOne({ where: { email } });
    if (!hasUser) {
      const newUser = await User.create({
      name,
      email,
      password,
      address,
      phone,
      gender,
      code: generateRandomNumber(),
      profilePicture: profilePicture ? profilePicture.filename : null,
    });
    res.json({ message: 'Usuário registrado com sucesso' });}
  else{res.json({ message: 'Usuario Ja possui email cadastrado' });}
   
    

    
  } catch (error) {
    console.error('Erro ao processar o registro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = { registerUser };
