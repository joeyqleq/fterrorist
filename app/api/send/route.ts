import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// IMPORTANT: You must add your Brevo API key to your Vercel environment variables.
// The variable name should be BREVO_API_KEY
const resend = new Resend(process.env.BREVO_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      // IMPORTANT: Replace with a sending domain you have verified with Brevo.
      from: 'Contact Form <noreply@yourdomain.com>', 
      // IMPORTANT: Replace with your actual email address to receive the messages.
      to: ['your-email@example.com'], 
      subject: `New message from ${name}`,
      react: (
        <div>
          <h1>New message from {name}</h1>
          <p>Email: {email}</p>
          <p>Message: {message}</p>
        </div>
      ),
    });

    if (error) {
      console.error({ error });
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ error }, { status: 500 });
  }
}
