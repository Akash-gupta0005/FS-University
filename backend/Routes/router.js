const express = require('express');
const router = new express.Router();
const users = require('../models/userSchema');
const nodemailer = require('nodemailer');

router.post('/register', async (req, res) => {
    const { studentName, email, phone, programCategory, programName, cityName } = req.body;
    try {
        const preuser = await users.findOne({ email: email })
        if (preuser) {
            return res.status(400).json({
                success: false,
                message: 'User already exist with this email'
            })
        }
        const finalUser = new users({
            studentName, cityName, programName, programCategory, email, phone
        })
        const storeData = await finalUser.save();

        const applicationNumber = `APP-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'FS University - Application Received',
            html: `
                <h2>Dear ${studentName},</h2>
                <p>Thank you for applying to FS University!</p>
                <p><strong>Your Application Number: ${applicationNumber}</strong></p>
                <div style="border: 1px solid #ddd; padding: 15px; margin: 20px 0;">
                    <h3>Application Details:</h3>
                    <ul>
                        <li><strong>Name:</strong> ${studentName}</li>
                        <li><strong>Email:</strong> ${email}</li>
                        <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
                        <li><strong>City:</strong> ${cityName || 'N/A'}</li>
                        <li><strong>Program Category:</strong> ${programCategory || 'N/A'}</li>
                        <li><strong>Program:</strong> ${programName || 'N/A'}</li>
                    </ul>
                </div>
                <p>We will review your application and contact you shortly.</p>
                <p>Best regards,<br>FS University Admissions Team</p>
            `
        };
        await transporter.sendMail(mailOptions);

        // Log the registration
        console.log('Application registered:', { applicationNumber, email, studentName });

        res.status(200).json({
            success: true,
            message: "Application submitted successfully! Check your email for confirmation.",
            applicationNumber
        });
    } catch (error) {
        console.error('Registration error:', error); // Log full error details
        res.status(500).json({
            success: false,
            message: 'Registration failed',
            error: error.message
        });
    }

})

module.exports = router;