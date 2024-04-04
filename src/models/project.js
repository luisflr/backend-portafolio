import mongoose from 'mongoose';

const link_schema = mongoose.Schema({
  github: {
    type: String,
    required: false
  },
  web: {
    type: String,
    required: false
  },
  ios: {
    type: String,
    required: false
  },
  android: {
    type: String,
    required: false
  },
});

const project_schema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type_project: {
    type: String,
    required: true
  },
  type_platform: {
    type: String,
    required: true
  },
  links: {
    type: link_schema,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  tech_stack: {
    type: [String],
    required: true
  },
  image: {
    type: String,
    required: true,
  }

});

export default mongoose.model('Project', project_schema);
// module.exports = mongoose.model('Project', project_schema);
// export default project_schema;