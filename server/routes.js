const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Student = require('../server/student');

//GET Single Student
router.get('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
        Student.findById(req.params.id, (err, doc) => {
            if(err){
                console.log('These is error in GET Student by ID ' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send(` No record found with ${req.params.id}`);
    }
})

//GET API
router.get('/', (req, res) => {
    Student.find((err, doc) => {
        if(err){
            console.log('Error in GET Data ' + err);
        } else {
            res.send(doc);
        }
    })
})

//POST API
router.post('/', (req, res) => {
    let std = new Student({
        name: req.body.name,
        course: req.body.course,
        academyname:req.body.academyname,
        Fees:req.body.Fees,
        level: req.body.level
    })

    std.save((err, doc) => {
        if(err){
            console.log('Error in Post Data ' + err);
        } else {
            res.send(doc);
        }
    })
})

//PUT API
router.put('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
        let std = {
            name: req.body.name,
            course: req.body.course,
            academyname:req.body.academyname,
            Fees:req.body.Fees,
            level: req.body.level
        }

        Student.findByIdAndUpdate(req.params.id, {$set :std}, {new: true}, (err, doc) => {
            if(err){
                console.log('Error in Student updation by ID ' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send(` No record found with ${req.params.id}`);
    }
})

//DELETE Single student
router.delete('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
        Student.findByIdAndRemove(req.params.id, (err, doc) => {
            if(err){
                console.log('Error in Student deletion by ID ' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send(` No record found with ${req.params.id}`);
    }
})

module.exports = router;