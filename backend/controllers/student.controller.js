
import Student from '../models/student.js';

// Ajouter un étudiant
export const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ message: 'Étudiant créé avec succès', student });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout", error: error.message });
  }
};

// Récupérer tous les étudiants
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération", error: error.message });
  }
};
