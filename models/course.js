const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const course = new Schema({
    emailOwner: String,
    fullNameOwner: String,
    phoneNumberOwner: Number,
    
    nameCourse: String,
    salary: Number,
    time: String,
    address: String,
    discribe: String
}, {collection: 'courses'});


const courseModel = mongoose.model('courseModel', course);

module.exports = {
    courseModel
}
