const express = require('express');
const User = require('../models/user.model');
const { getUsers, getUser, createUser, editUser, deleteUser } = require('../controllers/users.controller');
const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;