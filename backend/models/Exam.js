// models/Exam.js
import mongoose from 'mongoose';

const examSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }, 
   instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Instructor', // modèle séparé
    required: true,
  },
  result: {
    type: String,
    enum: ['pass', 'fail', 'pending'],
    default: 'pending'
  }
}, { timestamps: true });

const Exam = mongoose.model('Exam', examSchema);

export default Exam;
