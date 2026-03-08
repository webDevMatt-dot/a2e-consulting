import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, phone, service, message } = body;

        // Log initiation (no secrets)
        console.log("Processing contact form submission...");

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Verify connection configuration
        await new Promise((resolve, reject) => {
            // verify connection configuration
            transporter.verify(function (error, success) {
                if (error) {
                    console.log("Transporter Verification Error:", error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });

        const mailOptions = {
            from: `"Website Form" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER, // Using the env var to avoid hardcoding the email value
            replyTo: email,
            subject: `New Enquiry: ${service} - ${firstName} ${lastName}`,
            html: `<p>Name: ${firstName} ${lastName}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error: any) {
        console.error('FINAL ERROR:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to send' },
            { status: 500 }
        );
    }
}