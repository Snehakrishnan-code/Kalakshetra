const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/studentserver", { useNewUrlParser: true });

const Student = mongoose.model('Student', {
    name: {type: String},
    course: {type: String},
    academyname:{type:String},
    Fees:{type:String},
    level: {type: String}
});

module.exports = {
    Student
}