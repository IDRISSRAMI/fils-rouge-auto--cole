import Payment from '../models/Payment.js';

export const createPayment = async (req, res) => {
  try {
    const { student, amountPaid, balance } = req.body;
    const newPayment = new Payment({ student, amountPaid, balance });
    await newPayment.save();
    res.status(201).json({ message: 'Paiement enregistré', payment: newPayment });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};

export const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate('student', 'name');
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};
