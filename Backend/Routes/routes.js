const taskControl = require('../controllers/taskControllers')
const express = require('express')
const router = express.Router()

router.get('/', taskControl.allTasks)
router.get('/:id', taskControl.oneTask)
router.post('/', taskControl.addTask)
router.put('/update/:id', taskControl.updateTask)
router.delete('/delete/:id', taskControl.deleteTask)

module.exports = router