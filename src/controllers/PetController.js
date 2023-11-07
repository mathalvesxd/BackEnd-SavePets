const Pet = require('../models/Pet');
const User = require('../models/User')

const createPet = async (req, res) => {
  const { name, species, userId } = req.body;
   // Obtenha o ID do usuário a partir da autenticação

  try {
    const pet = await Pet.create({ name, species, userId });
    res.json(pet);
  } catch (error) {
    console.error('Erro ao criar pet:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const updatePet = async (req, res) => {
  const { id, name, species } = req.body;

  try {
    const pet = await Pet.findOne({ where: { id } });

    if (!pet) {
      res.status(404).json({ error: 'Pet não encontrado' });
      return;
    }


    pet.name = name;
    pet.species = species;
    await pet.save();

    res.json(pet);
  } catch (error) {
    console.error('Erro ao atualizar pet:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const deletePet = async (req, res) => {
  const { id } = req.body;

  try {
    const pet = await Pet.findOne({ where: { id } });

    if (!pet) {
      res.status(404).json({ error: 'Pet não encontrado' });
      return;
    }

    

    await pet.destroy();
    res.json({ message: 'Pet excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir pet:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = {
  createPet,
  updatePet,
  deletePet,
};
