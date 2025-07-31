// models/Student.js
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  enrolledAt: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);
export default Student;
