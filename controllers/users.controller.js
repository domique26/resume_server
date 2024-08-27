const { model } = require('mongoose');
const User = require('../models/user.model');

const getUsers = async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const editUser = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await User.findByIdAndUpdate(id,req.body);
    if(!user) {
      res.status(404).json({message: "User not found"});
    }
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({message: "Deleted User Successfully!"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  editUser,
  deleteUser
}