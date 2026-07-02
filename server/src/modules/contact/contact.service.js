import { sendContactEmail } from "../../services/email.service.js";

/**
 * Send Contact Form Message
 */
export const sendContactMessage = async (payload) => {
  const {
    name,
    email,
    subject,
    message,
  } = payload;

  await sendContactEmail({
    name,
    email,
    subject,
    message,
  });

  return {
    success: true,
    message: "Your message has been sent successfully.",
  };
};