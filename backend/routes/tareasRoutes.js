const express = require ('express')
const router = express.Router()
const {getTareas, createTareas, updateTareas, deleteTareas} = require ('../controllers/tareasControllers.js')

//Obtenemos las tareas
router.get('/', getTareas)

//Creamos las tareas
router.post('/', createTareas)

//Modificamos las tareas
router.put('/:id', updateTareas)

//Borramos las tareas
router.delete('/:id', deleteTareas)

module.exports = router;