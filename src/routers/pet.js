const express = require('express');
const router = express.Router();
const PetController = require('../controllers/PetController');

router.post('/create', PetController.createPet);
router.put('/update', PetController.updatePet);
router.delete('/delete', PetController.deletePet);

module.exports = router;
