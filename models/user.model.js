const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  key: String,
  value: String
});

const skillSchema = new mongoose.Schema({
  title: String,
  duration: String
});

const experienceSchema = new mongoose.Schema({
  company: String,
  role: String,
  duration: String,
  description: String
});

const educationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  years: String
});

const referenceSchema = new mongoose.Schema({
  name: String,
  title: String
});

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    default: ''
  },
  last_name: {
    type: String,
    required: true,
    default: ''
  },
  sum: {
    type: String,
    default: ''
  },
  path: {
    type: String,
    default: ''
  },
  contacts: [contactSchema],
  resume: {
    skills: [skillSchema],
    experience: [experienceSchema],
    education: [educationSchema],
    references: [referenceSchema]
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
