import Instructor from '../models/Instructor.js';

export const createInstructor = async (req, res) => {
  try {
    const newInstructor = new Instructor(req.body);
    await newInstructor.save();
    res.status(201).json({ message: "Instructor créé avec succès", instructor: newInstructor });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création", error });
  }
};

export const getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.status(200).json(instructors);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération", error });
  }
};