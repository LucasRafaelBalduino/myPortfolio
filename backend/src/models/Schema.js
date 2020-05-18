import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: String,
  image: String,
  link: String,
  description: String,
  stack: [String],
});

export default mongoose.model('Project', ProjectSchema);
