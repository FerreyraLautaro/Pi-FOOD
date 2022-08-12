const { Router } = require('express');
// Importar todos los routers;

const recipe = require('./recipe');
const recipes = require('./recipes');
const diet = require('./diets');

const router = Router();

// Configurar los routers
router.use('/recipe', recipe);
router.use('/types', diet);
router.use('/recipes', recipes);


module.exports = router;
