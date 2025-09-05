import { type NextRequest, NextResponse } from 'next/server';
import * as SibApiV3Sdk from '@getbrevo/brevo';

// Configure the Brevo API client
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
const apiKey = process.env.BREVO_API_KEY;
if (apiKey) {
  apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, apiKey);
} else {
  // Log an error or handle the missing API key case
  console.error("BREVO_API_KEY is not set. The email API will not work.");
}

export async function POST(req: NextRequest) {
  // Ensure the API key is set before proceeding
  if (!apiKey) {
    return NextResponse.json({ error: 'Server configuration error: Missing API key' }, { status: 500 });
  }

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Construct the email payload for Brevo
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.sender = { name: 'Digital Anarchy', email: 'anarchist@terrorist.me' };
  sendSmtpEmail.to = [{ email: 'eojiraam@gmail.com' }]; // Replace with your recipient email
  sendSmtpEmail.subject = `New Request from ${name}`;
  sendSmtpEmail.htmlContent = `
    <div>
      <h1>New message from ${name}</h1>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    </div>
  `;

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email with Brevo:', error);
    // It's good practice to not expose the raw error to the client
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}