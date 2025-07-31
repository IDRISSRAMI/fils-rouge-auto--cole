import mongoose from 'mongoose';

const instructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  specialty: {
    type: String,
    enum: ['code', 'conduite'],
    default: 'conduite',
  },
  phone: String,
  email: {
    type: String,
    unique: true,
    lowercase: true
  }
}, { timestamps: true });

const Instructor = mongoose.model('Instructor', instructorSchema);
export default Instructor;