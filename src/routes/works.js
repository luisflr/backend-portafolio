import express from 'express';
import work_schema from '../models/works.js';
import { quickSort } from '../utils/quickSort.js';

const router = express.Router();

// create project
router.post('/works', (req, res) => {
  const work = work_schema(req.body);
  work
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
router.get('/works', (req, res) => {
  work_schema
    .find()
    .then((data) => {
      data = quickSort(data, 0, data.length - 1)
      return res.json({
      status: 200,
      message: 'Successfully',
      data
    })})
    .catch((err) => res.json({ 
      status: 500,
      message: 'Error',
      err
    }))
});

// get project by id
router.get('/works/:id', (req, res) => {
  const { id } = req.params;
  work_schema
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
router.put('/works/:id', (req, res) => {
  const { id } = req.params;
  const {
    number_of_work,
    name,
    period,
    description,
    stack,
    tech_stack,
    image,
    work_link
  } = req.body;
  work_schema
    .updateOne({_id: id}, {
      number_of_work,
      name,
      period,
      description,
      stack,
      tech_stack,
      image,
      work_link
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
router.delete('/works/:id', (req, res) => {
  const { id } = req.params;
  work_schema
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

// module.exports = router;

export default router;