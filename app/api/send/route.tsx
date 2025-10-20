import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    // Check API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 },
      );
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Initialize Resend client
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send the email
    const emailResponse = await resend.emails.send({
      from: "Digital Anarchy <anarchist@terrorist.me>",
      to: ["eojiraam@gmail.com"],
      subject: `New Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #22c55e; margin-bottom: 20px;">New message from ${name}</h1>
            <div style="margin-bottom: 20px;">
              <strong style="color: #333;">From:</strong> ${name} &lt;${email}&gt;
            </div>
            <div style="margin-bottom: 20px;">
              <strong style="color: #333;">Email:</strong> ${email}
            </div>
            <div style="margin-bottom: 20px;">
              <strong style="color: #333;">Message:</strong>
            </div>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #22c55e;">
              ${message.replace(/\n/g, "<br>")}
            </div>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 12px; text-align: center;">
              This message was sent via the FREEBIE TERRORIST contact form.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      messageId: emailResponse.data?.id || "sent",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}
