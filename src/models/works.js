import mongoose from 'mongoose';

const work_schema = mongoose.Schema({
  number_of_work: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  period: {
    type: String,
    required: true
  },
  description: {
    type: [String],
    required: true
  },
  stack: {
    type: [String],
    required: true
  },
  image: {
    type: String,
    required: true
  },
  work_link: {
    type: String,
    required: true
  }
})

// module.exports = mongoose.model('Works', work_schema)
// export default work_schema;
export default mongoose.model('Works', work_schema);