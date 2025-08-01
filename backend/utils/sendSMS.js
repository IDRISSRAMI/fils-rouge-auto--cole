import twilio from 'twilio';

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function sendSMS(to, body) {
  try {
    await client.messages.create({
      body,
      from: process.env.TWILIO_PHONE_NUMBER, // ton numéro Twilio
      to,
    });
    console.log('SMS envoyé à:', to);
  } catch (error) {
    console.error('Erreur en envoyant SMS:', error);
  }
}
