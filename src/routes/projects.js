const express = require('express');
const project_schema = require('../models/project');
const router = express.Router();

// create project
router.post('/projects', (req, res) => {
  const project = project_schema(req.body);
  project
    .save()
    .then((data) => res.json({
      status: 200,
      message: 'Successfully',
      data
    }))
    .catch((err) => res.json({ 
      status: 500,
      message: 'Error',
      err
    }))
});

// get all projects
router.get('/projects', (req, res) => {
  project_schema
    .find()
    .then((data) => res.json({
      status: 200,
      message: 'Successfully',
      data
    }))
    .catch((err) => res.json({ 
      status: 500,
      message: 'Error',
      err
    }))
});

// get project by id
router.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  project_schema
    .findById(id)
    .then((data) => res.json({
      status: 200,
      message: 'Successfully',
      data
    }))
    .catch((err) => res.json({ 
      status: 500,
      message: 'Error',
      err
    }))
});

// update project PUT
router.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const {
    title,
    type_project,
    type_platform,
    links,
    description,
    tech_stack,
    image
  } = req.body;
  project_schema
    .updateOne({_id: id}, {
      title,
      type_project,
      type_platform,
      links,
      description,
      tech_stack,
      image
    })
    .then((data) => res.json({
      status: 200,
      message: 'Successfully',
      data
    }))
    .catch((err) => res.json({ 
      status: 500,
      message: 'Error',
      err
    }))
});

// delete project
router.delete('/projects/:id', (req, res) => {
  const { id } = req.params;
  project_schema
    .deleteOne({_id: id})
    .then((data) => res.json({
      status: 200,
      message: 'Successfully',
      data
    }))
    .catch((err) => res.json({ 
      status: 500,
      message: 'Error',
      err
    }))
});

module.exports = router;