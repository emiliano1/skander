import axios from 'axios';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const recaptchaResponse = req.body.get('g-recaptcha-response');
  const formIdentifier = req.body.get('form_identifier');
  const honeypotField = req.body.get('CatchmeIFyouCan'); // Honeypot field

  // If the Honeypot field is filled, reject the submission
  if (honeypotField) {
    console.log('Spam detected - Honeypot field filled');
    return res.status(400).json({ error: 'Spam detected' });
  }

  if (!recaptchaResponse) {
    return res.status(400).json({ error: 'reCAPTCHA is required' });
  }

  try {
    const RECAPTCHA_SECRET_KEY = '6Ldnzh4qAAAAAJc-xnDaAebfbsTajxLaECrh53Re';
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`;
    const response = await axios.post(verificationURL);
    const result = response.data;

    if (result.success) {
      // Prepare the email content based on the form identifier
      let formData;
      let subject;
      if (formIdentifier === 'contact_form') {
        formData = {
          name: req.body.get('form_name'),
          email: req.body.get('form_email'),
          subject: req.body.get('form_subject'),
          phone: req.body.get('form_phone'),
          message: req.body.get('form_message'),
        };
        subject = `New Contact Form Submission: ${formData.subject}`;
      } else if (formIdentifier === 'second_form') {
        formData = {
          name: req.body.get('name'),
          email: req.body.get('email'),
          phone: req.body.get('phone'),
          message: req.body.get('form_message'),
        };
        subject = 'New Request A Quote Submission';
      }

      // Create a transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        host: 'smtp.your-email-provider.com', // Replace with your SMTP server
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'your-email@yourdomain.com', // Replace with your SMTP email
          pass: 'your-email-password', // Replace with your SMTP email password
        },
      });

      // Set up email data
      const mailOptions = {
        from: `${formData.name} <${formData.email}>`, // Sender address from the form
        to: 'operations@skanderglobal.com', // list of receivers
        subject: subject, // Subject line
        text: `
          You have received a new message from your website contact form.

          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Message: ${formData.message}
        `,
        html: `
          <h3>You have received a new message from your website contact form.</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        `,
      };

      // Send mail with defined transport object
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ success: 'Form submitted and email sent successfully!' });
    } else {
      return res.status(400).json({ error: 'reCAPTCHA verification failed' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Server error sending email' });
  }
}
