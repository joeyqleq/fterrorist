import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      // IMPORTANT: This 'from' address must use a domain you have verified with Resend.
      from: 'Digital Anarchy <anarchist@terrorist.me>', 
      // IMPORTANT: Replace with your actual email address to receive the messages.
      to: ['eojiraam@gmail.com'], 
      subject: `New Request from ${name}`,
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
