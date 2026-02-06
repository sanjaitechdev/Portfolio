require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5500', 'http://127.0.0.1:5500'],
    credentials: true
}));
app.use(express.json());

// POST endpoint for form submission
app.post('/api/submit-enquiry', async (req, res) => {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide name, email, and message.' });
    }

    // Respond immediately to the user for a "fast" feel
    res.status(200).json({ message: 'Enquiry submitted successfully!' });

    // Process email sending in the background
    (async () => {
        try {
            // Create a Nodemailer transporter
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            // Email configuration
            const mailOptions = {
                from: email,
                to: process.env.EMAIL_USER,
                subject: `New Project Enquiry from ${name}`,
                html: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                        <h2 style="color: #007bff;">New Project Inquiry</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong></p>
                        <blockquote style="background: #f4f4f4; padding: 15px; border-left: 5px solid #007bff;">
                            ${message}
                        </blockquote>
                    </div>
                `
            };

            await transporter.sendMail(mailOptions);
        } catch (error) {
            const fs = require('fs');
            const logMessage = `[${new Date().toISOString()}] Background Error: ${error.message}\n${error.stack}\n\n`;
            fs.appendFileSync('error.log', logMessage);
            console.error('Background Email Error:', error);
        }
    })();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
