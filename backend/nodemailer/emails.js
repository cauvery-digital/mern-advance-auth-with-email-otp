import {
	PASSWORD_RESET_REQUEST_TEMPLATE,
	PASSWORD_RESET_SUCCESS_TEMPLATE,
	VERIFICATION_EMAIL_TEMPLATE,
	WELCOME_EMAIL_TEMPLET,
} from "./emailTemplates.js";
import {transporter, sender} from "./nodemailer.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
	const recipient = email;
	try {
	const mailOptions = {
			from: process.env.MAIL_FROM,
			to: recipient,
			subject: "Verify your email",
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
			category: "Email Veryfication",
	};
		const response = await transporter.sendMail(mailOptions);

		console.log("Email sent successfully", response);
	} catch (error) {
		console.error(`Error sending verification`, error);

		throw new Error(`Error sending verification email: ${error}`);
	}
};

export const sendWelcomeEmail = async (email, name) => {
	const recipient = email;

	try {
		const response = await transporter.sendMail({
			from: process.env.MAIL_FROM,
			to: recipient,
			subject: "Email Verified Successfully",
			html: WELCOME_EMAIL_TEMPLET.replace("{name}", name),
		});

		console.log("Welcome email sent successfully", response);
	} catch (error) {
		console.error(`Error sending welcome email`, error);

		throw new Error(`Error sending welcome email: ${error}`);
	}
};

export const sendPasswordResetEmail = async (email, resetURL) => {
	const recipient = email;

	try {
		const response = await transporter.sendMail({
			from: process.env.MAIL_FROM,
			to: recipient,
			subject: "Reset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
			category: "Password Reset",
		});
	} catch (error) {
		console.error(`Error sending password reset email`, error);

		throw new Error(`Error sending password reset email: ${error}`);
	}
};

export const sendResetSuccessEmail = async (email, name) => {
	const recipient = email;

	try {
		const response = await transporter.sendMail({
			from: process.env.MAIL_FROM,
			to: recipient,
			subject: "Password Reset Successful",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE.replace("{name}", name),
			category: "Password Reset",
		});

		console.log("Password reset email sent successfully", response);
	} catch (error) {
		console.error(`Error sending password reset success email`, error);

		throw new Error(`Error sending password reset success email: ${error}`);
	}
};
